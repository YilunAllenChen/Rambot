import React from "react";
import Collections from "./components/collections";
import Dashboard from "./components/dashboard";
import Documents from "./components/documents";
import About from "./components/about";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.option = this.props.option;
    this.state = {
      collectionSelected: ""
    };
  }

  render() {
    let { collectionSelected } = this.state;
    let { option } = this.props;
    switch (option) {
      case "Documents":
        return <Documents collectionSelected={collectionSelected}></Documents>;
      case "Dashboard":
        return <Dashboard></Dashboard>;
      case "Collections":
        return (
          <Collections
            onViewCollection={id => {
              this.setState({ collectionSelected: id, option: "Documents" });
              this.props.onOptionChange("Documents");
            }}
          ></Collections>
        );
      case "About":
        return <About></About>;
      default:
        return <div></div>;
    }
  }
}

import React from "react";
import {Image, Menu, Sidebar } from "semantic-ui-react";



export default class VerticalSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => {
    this.props.onActiveChange({ active: name });
  };

  render() {
    let {visible, direction} = this.props;
    let modules = ['Dashboard','Editor','Collections','Documents','Settings','About'];
    let buttons = [];
    modules.forEach(module => {
      buttons.push(
        <Menu.Item
          name={module}
          onClick={this.handleItemClick}
          key={module}
        >
          {module}
        </Menu.Item>)
    });
    return (
      <Sidebar
        as={Menu}
        animation='overlay'
        direction={direction}
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
        style={{padding: '5% 0'}}
      >
        <Image
          centered
          src={require("../assets/logo.svg")}
          size="small"
        ></Image>
        {buttons}
      </Sidebar>
    );
  }
}

import React from "react";
import { Divider, Image, Menu, Sidebar } from "semantic-ui-react";



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
    return (
      <Sidebar
        as={Menu}
        animation='push'
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
        <Menu.Item
          name="Dashboard"
          onClick={this.handleItemClick}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          name="Collections"
          onClick={this.handleItemClick}
        >
          Collections
        </Menu.Item>
        <Menu.Item
          name="Documents"
          onClick={this.handleItemClick}
        >
          Documents
        </Menu.Item>
        <Divider></Divider>

        <Menu.Item
          name="Setting"
          onClick={this.handleItemClick}
        >
          Setting
        </Menu.Item>

        <Menu.Item
          name="About"
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Sidebar>
    );
  }
}

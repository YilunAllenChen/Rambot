import React from "react";
import {
  Menu,
  Container,
  Divider,
  Grid,
  Image,
  Header,
  Sidebar
} from "semantic-ui-react";
export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Dashboard",
      collections: [],
      activeCollection: "test_cases",
      visible: false
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.onOptionChange({ newOption: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <HorizontalSidebar visible={this.state.visible}></HorizontalSidebar>
      </Container>
    );
  }
}

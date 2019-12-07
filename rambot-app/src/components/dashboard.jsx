import React from "react";
import {
  Icon,
  Container,
  Segment,
  Transition,
  Image,
  Button
} from "semantic-ui-react";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  toggleVisibility = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    let { visible } = this.state;
    return (
      <Container style={{ height: "100%" }}>
        <Button
          onClick={() => {
            this.toggleVisibility();
          }}
        >
          click
        </Button>
        <Segment style={{ top: "40%", border: "0px", boxShadow: "none" }}>
          <Transition
            duration={{ hide: 300, show: 800 }}
            visible={visible}
            unmountOnHide={true}
          >
            <Image
              centered
              size="small"
              src="https://react.semantic-ui.com/images/leaves/3.png"
            />
          </Transition>
          <Icon.Group size="huge">
            <Icon size="big" name="expand" />
            <Icon name="compress" />
          </Icon.Group>
          <p />
          <Icon.Group size="huge">
            <Icon size="big" name="expand" />
            <Icon name="compress" />
          </Icon.Group>
        </Segment>
      </Container>
    );
  }
}

import React from "react";
import {
  Icon,
  Container,
  Segment,
  Transition,
  Button,
  Popup
} from "semantic-ui-react";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modules: []
    };
  }

  addPowertrainModule = () => {
    let { modules } = this.state;
    modules.push({
      name: "module_name",
      id: Date.now().toString(10),
      icon: "angle double up",
      color: "blue",
      visible: true,
      content: "This is a powertrain module."
    });
    this.setState({ modules: modules });
  };

  addCoreModule = () => {
    let { modules } = this.state;
    modules.push({
      name: "module_name",
      id: Date.now().toString(10),
      icon: "compress",
      color: "red",
      visible: true,
      content: "This is a core module."
    });
    this.setState({ modules: modules });
  };

  render() {
    let { visible, modules } = this.state;
    let modules_vis = [];
    modules.forEach(module => {
      modules_vis.push(
        <div key={module.id}>
          <Transition
            duration={{ hide: 300, show: 800 }}
            visible={visible}
            unmountOnHide={true}
          >
            <Popup
              content={module.content}
              on="click"
              trigger={
                <Icon.Group size="huge">
                  <Icon size="big" name="expand" />
                  <Icon name={module.icon} color={module.color} />
                </Icon.Group>
              }
            />
          </Transition>
        </div>
      );
    });
    
    let vert_offset = (60 - modules_vis.length * 10).toString() + "%";
    return (
      <Container style={{ height: "100%", textAlign: "center" }}>
        <Button
          onClick={() => {
            this.addCoreModule();
          }}
        >
          Add Core
        </Button>
        <Button
          onClick={() => {
            this.addPowertrainModule();
          }}
        >
          Add Powertrain
        </Button>
        <Segment style={{ top: vert_offset, border: "0px", boxShadow: "none" }}>
          {modules_vis}
        </Segment>
      </Container>
    );
  }
}

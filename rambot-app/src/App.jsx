import React from "react";
import "semantic-ui-css/semantic.min.css";
import VerMenu from "./components/menu";
import Board from "./board";
import { Card, Grid, Sidebar, Segment, Menu } from "semantic-ui-react";

const app_wrapper = {
  margin: 0,
  height: "100%",
};

export default class App extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    let { key } = e;
    switch (key) {
      case "Tab":
        e.preventDefault();
        this.toggleVisible();
        break;
      default:
        console.log(key);
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      active_left: "Dashboard",
      active_right: "Editor"
    };
  }

  toggleVisible() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const { visible, active_left, active_right } = this.state;
    return (
      <div style={app_wrapper}>
        <Sidebar.Pushable as={Segment}>
          <VerMenu
            as={Menu}
            visible={visible}
            direction='left'
            onActiveChange={({ active }) => {
              console.log(active_left);
              this.setState({ active_left: active });
            }}
          ></VerMenu>

          <VerMenu
            as={Menu}
            visible={visible}
            direction='right'
            onActiveChange={({ active }) => {
              console.log(active_right);
              this.setState({ active_right: active });
            }}
          ></VerMenu>

          <Sidebar.Pusher dimmed={visible}>
            <Grid style={{ height: "103vh" }}>
              <Grid.Column width={8}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Board option={active_left}></Board>
                </Card>
              </Grid.Column>
              <Grid.Column width={8}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Board option={active_right}></Board>
                </Card>
              </Grid.Column>
            </Grid>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

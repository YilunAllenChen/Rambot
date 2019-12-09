import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import { Segment, Button } from "semantic-ui-react";

const code = "const a = 0;";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Segment style={{ height: "100%" }}>
        <Segment style={{ height: "92%" }}>
          <CodeMirror
            value={code}
            options={{
              keyMap: "sublime",
              mode: "jsx"
            }}
          />
        </Segment>
        <Segment style={{ height: "8%",textAlign: 'right' }}>
          <Button>Compile</Button>
          <Button>Visualize</Button>
          <Button>Upload</Button>
        </Segment>
      </Segment>  
    );
  }
}

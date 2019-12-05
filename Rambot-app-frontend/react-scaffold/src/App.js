import React from "react";
import "semantic-ui-css/semantic.min.css";
import NavMenu from "./menu";
import Board from "./board";


const app_wrapper = {
  float: "right",
  textAlign: "center",
  backgroundColor:"#eeeeee",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignTtems: "center",
  justifyContent: "top",
  fontSize: "2vh",
  width: "85%",
  verticalAlign: "text-top",
  padding: "80px 30px",
}

const sidebar_wrapper = {
  float: "left",
  fontSize: "2vh",
  width: "15%",
  backgroundColor: "#282c34",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "auto",
  position: "fixed",
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "Dashboard"
    };
  }
   
  render() {
    return (
      <div>
        <div style={sidebar_wrapper}>
          <NavMenu onOptionChange={({newOption})=>{this.setState({option:newOption})}}></NavMenu>
        </div>
        <div style={app_wrapper}>
          <Board onOptionChange={(newOption)=>{this.setState({option:newOption})}}option={this.state.option}></Board>
        </div>
      </div>
    );
  }
}

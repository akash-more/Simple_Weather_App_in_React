import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// function Room(){
//   return (
//     <div className="room">The room is lit</div>
//   );
// }
class Room extends React.Component {
  state = {
    isLit: false,
    currentTemp: 22
  };
  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };
  switchOn = () => {
    this.setState({
      isLit: true
    });
  };
  switchOff = () => {
    this.setState({
      isLit: false
    });
  };
  inc = () => {
    this.setState({
      currentTemp: this.state.currentTemp + 1
    });
  };
  dec = () => {
    this.setState({
      currentTemp: this.state.currentTemp - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        The room is {this.state.isLit ? "lit" : "dark"} and temp is{" "}
        {`${this.state.currentTemp} degree Celcius`}
        <br /> <button onClick={this.flipLight}> Flip </button>
        <button onClick={this.switchOn}> ON </button>
        <button onClick={this.switchOff}> OFF </button>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}
ReactDOM.render(<Room />, document.getElementById("root"));

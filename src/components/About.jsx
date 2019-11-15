import React, { Component } from "react";

class About extends Component {
  state = {};
  aboutStyle = {
    fonFamily: "Arial",
    fontSize: 18,
    color: "black",
    padding: 5
  };
  render() {
    return (
      <h2 style={this.aboutStyle}>
        Gif Hunter is a non-profit, purely for the lols, pratise App!
      </h2>
    );
  }
}

export default About;

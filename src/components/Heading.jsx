import React, { Component } from "react";

class Heading extends Component {
  headingStyle = {
    color: "whitesmoke",
    textAlign: "center",
    padding: 15,
    fontSize: 40,
    backgroundColor: "#143691",
    marginBottom: 0,
    fontStyle: "TimesNewRoman"
  };

  render() {
    return <h1 style={this.headingStyle}>Gif Hunter</h1>;
  }
}

export default Heading;

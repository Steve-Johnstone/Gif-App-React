import React, { Component } from "react";
import GifContainer from "./GifContainer";

const apiKey = "hNaKugkLRlMWnhKX0sk0O54n4gI2NXGq";

class GifComponent extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      gifs: []
    };
  }

  buttonStyle = {
    border: 2,
    bordeRadius: 8,
    color: "white",
    backgroundColor: "#143691",
    padding: 5,
    display: "inlineBlock",
    fontSize: 16
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ word: event.target.value });
  };

  handleSubmit = event => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.word}&api_key=${apiKey}`
      // { mode: "no-cors", headers: { Accept: "application/json" }}
    )
      .then(response => response.json())
      .then(response => {
        console.log(`${this.state.word.value}`);
        this.setState({ gifs: response.data });
        console.log(`${this.state.gifs}`);
      });
  };

  render() {
    return (
      <GifContainer
        gifs={this.state.gifs}
        handleChange={this.handleChange}
        style={this.buttonStyle}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default GifComponent;

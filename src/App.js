import React, { Component } from "react";
import Heading from "./components/Heading";
import "./App.css";
import NavBar from "./components/NavBar";
import GifComponent from "./components/GifComponent";
import About from "./components/About";

class App extends Component {
  state = {
    gifs: []
  };
  render() {
    return (
      <React.Fragment>
        <Heading />
        <NavBar />
        <GifComponent />
        <About />
      </React.Fragment>
    );
  }
}

export default App;

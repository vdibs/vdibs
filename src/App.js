import React, { Component } from "react";
import "./App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";

const selected = {
  borderBottom: "solid",
  borderWidth: 1,
  borderColor: "orange",
  padding: "0px 6px 10px 6px",
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      show: Home,
    };
  }

  render() {
    const Component = this.state.show;

    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <h1 className="name" onClick={() => this.setState({ show: Home })}>Valentina Dibs</h1>
        <div className="toolbar">
          <a
            href="#"
            className="linkTo"
            onClick={() => this.setState({ show: Work })}
            style = { Component === Work ? selected : {} }
          >
            Work
          </a> 
          <a
            href="#"
            className="linkTo"
            onClick={() => this.setState({ show: Project })}
            style = { Component === Project ? selected : {} }
          >
            Projects
          </a>
          <a
            href="#"
            className="linkTo"
            onClick={() => this.setState({ show: Contact })}
            style = { Component === Contact ? selected : {} }
          >
            Contact
          </a>
        </div>
        <Component /> 
      </div>
    );
  }
}

export default App;

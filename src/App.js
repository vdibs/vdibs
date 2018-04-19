import React, { Component } from "react";
import "./App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Scroll from 'react-scroll-to-element';
import Sticky from 'react-sticky-el';

const selected = {
  borderBottom: "solid",
  borderWidth: 1,
  borderColor: "orange",
  padding: "0px 6px 10px 6px",
}

const unselected = {
  padding: "0px 6px 10px 6px",
}

function scrollTo(selected) {
  document.querySelector(selected).scrollIntoView({behavior: 'smooth'});
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
      <div className="App" id="home-page">
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <h1 className="name">Valentina Dibs</h1>
        <Sticky className="toolbar">
          <div
            className="linkTo"
            onClick={() => this.setState({ show: Home })}
            style = { Component === Home ? selected : unselected }
          >
            <Scroll type="id" element="home-page" offset={-62}><div style={{ cursor: "pointer" }}>Home</div></Scroll>
          </div> 
          <div
            className="linkTo"
            onClick={() => this.setState({ show: Work })}
            style = { Component === Work ? selected : unselected }
          >
            <Scroll type="id" element="work-page" offset={-62}><div style={{ cursor: "pointer" }}>Work</div></Scroll>
          </div> 
          <div
            className="linkTo"
            onClick={() => this.setState({ show: Project })}
            style = { Component === Project ? selected : unselected }
          >
            <Scroll type="id" element="project-page" offset={-62}><div style={{ cursor: "pointer" }}>Projects</div></Scroll>
          </div>
          <div
            className="linkTo"
            onClick={() => this.setState({ show: Contact })}
            style = { Component === Contact ? selected : unselected }
          >
            <Scroll type="id" element="contact-page" offset={-62}><div style={{ cursor: "pointer" }}>Contact</div></Scroll>
          </div>
          <hr className="toolbar-separator" />
        </Sticky>
        <Home  id="home-page" /> 
      </div>
    );
  }
}

export default App;

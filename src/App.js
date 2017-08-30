import React, { Component } from "react";
import "./App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: "Home",
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
        <h1 className="name" onClick={() => this.setState({ show: "Home" })}>
          Valentina Dibs
        </h1>
        <hr />
        <Grid>
          <Row className="show-grid">
            <Col className="col show-grid" sm={4} md={4} xs={12} lg={4}>
              <div className="intro">
                <h2 className="bio">Bio</h2>
                <p>
                  Hi, I&rsquo;m Valentina Dibs - a 3rd year at UC San Diego
                  where I study Computer Science and Cognitive Science with a
                  specialization in HCI.
                </p>
                <p>
                  I love to create (code, sing, knit, sew), listen to podcasts
                  (NPR politics + Ted Radio Hour), read (just started The
                  Jungle), and exercise (started weight-lifting last year).
                </p>
              </div>
              <div className="toolbar">
                <a
                  href="#"
                  className="linkTo"
                  onClick={() => this.setState({ show: Work })}
                >
                  Work
                </a>
                <a
                  href="#"
                  className="linkTo"
                  onClick={() => this.setState({ show: Project })}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="linkTo"
                  onClick={() => this.setState({ show: Contact })}
                >
                  Contact
                </a>
              </div>
            </Col>
            <Col className="col show-grid" sm={8} md={8} xs={12} lg={8}>
              {Component === "Home" ? null : <Component />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

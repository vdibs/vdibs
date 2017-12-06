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
        <hr />
        <Grid>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <a
                href="#"
                className="linkTo"
                onClick={() => this.setState({ show: Work })}
                style = { Component === Work ? selected : {} }
              >
                Work
              </a> 
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <a
                href="#"
                className="linkTo"
                onClick={() => this.setState({ show: Project })}
                style = { Component === Project ? selected : {} }
              >
                Projects
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <a
                href="#"
                className="linkTo"
                onClick={() => this.setState({ show: Contact })}
                style = { Component === Contact ? selected : {} }
              >
                Contact
              </a>
            </Col>
          </Row>
        </Grid>
        <hr style={{top:-10}}/>
        <Component /> 
      </div>
    );
  }
}

export default App;

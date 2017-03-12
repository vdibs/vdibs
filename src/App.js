import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Work from './components/Work';
import Project from './components/Project';
import Contact from './components/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showHome: true,
      showWork: false,
      showProject: false,
      showContact: false,
    } 
  }

  _handleHome() {
    var show = !this.state.showHome;
    this.setState({
      showHome: show,
      showWork: false,
      showProject: false,
      showContact: false
    });
  }

  _handleWork() {
      var show = !this.state.showWork;
      this.setState({
       showWork: show,
       showHome: false,
       showProject: false,
       showContact: false
      });
  }

  _handleProject() {
     var show = !this.state.showProject;
      this.setState({
       showWork: false,
       showHome: false,
       showProject: show,
       showContact: false
     });
  }

  _handleContact() {
    var show = !this.state.showContact;
      this.setState({
       showWork: false,
       showHome: false,
       showProject: false,
       showContact: show
    });
  }

  render() {

    return (
      <div className="App"> 
        <link href='https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter'
            rel='stylesheet'
            type='text/css' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <h1 className="name" onClick={this._handleHome.bind(this)}>Valentina Dibs</h1>
        <hr />
        <Grid><Row className="show-grid">
        <Col className="col" sm={4} md={4} xs={12} lg={4} className="show-grid">
          <div className="intro">  
            <p className="bio">Bio</p>
            <p>Hi, I&rsquo;m Valentina Dibs - a 3rd year at UC San Diego where I study Computer Science and Cognitive Science with a specialization in HCI.</p>
            <p>I love to create (code, sing, knit, sew), listen to podcasts (NPR politics + Ted Radio Hour), read (just started The Jungle), and exercise (started weight-lifting last year).</p> 
          </div>
          <div className="toolbar">
            <a href="#" className="linkTo" onClick={this._handleWork.bind(this)}>Work</a>
            <a href="#" className="linkTo" onClick={this._handleProject.bind(this)}>Projects</a>
            <a href="#" className="linkTo" onClick={this._handleContact.bind(this)}>Contact</a>
          </div>
        </Col>
        <Col className="col" sm={8} md={8} xs={12} lg={8} className="show-grid">
          {this.state.showWork ?
            <Work />  : null  } 
          {this.state.showProject ?
            <Project />  : null  } 
          {this.state.showContact ?
            <Contact />  : null  } 
        </Col>
        </Row></Grid>
      </div>
    );
  }
}

export default App;

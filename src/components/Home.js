import React, { Component } from 'react'; 
import '../App.css';
import { Col, Row } from "react-bootstrap";
import Work from './Work.js';
import Project from './Project.js';
import Contact from './Contact.js';

class Home extends Component {
	render() {

		return (
			<div className="homeContainer">
                
                <Row>
                    <Col xs={0} sm={0} md={1} lg={1}  />
                    <Col className="headshotContainer" xs={12} sm={12} md={3} lg={3} >
                        <img className="headshotImg" alt={"headshot"} src={require('../img/head.jpg')} width={200} height={200}/>
                    </Col>
                    <Col xs={12} sm={12} md={7}lg={7}>
                        <p className="greeting">Hello! I&rsquo;m Valentina Dibs.</p>
                        
                        <p style={{paddingTop: 5}}>
                            I am a 4th year at UC San Diego where I study Computer Science and Cognitive Science with a
                            specialization in HCI.
                        </p>
                        <p style={{paddingTop: 5}}>
                            I like to get lost in a project. When I'm not at the computer I find myself dreaming (literally) about that 
                            one coding problem that I'm trying to fix. Problem solving and perseverance are my go to.
                        </p>
                        <p style={{paddingTop: 5, paddingBottom: 20}}>
                            I&rsquo;m also a hobbyist. I love to create (code, sing, knit, sew), listen to podcasts
                            (NPR politics + Ted Radio Hour), read (just started One Hundred Years of Solitude), and exercise (bouldering and weight lifting).
                        </p>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1}  />
                </Row> 
                <hr id="work-page" className="page-separator" />
                <Work />
                <hr id="project-page" className="page-separator" />
                <Project />
                <hr className="page-separator"id="contact-page"  />
                <Contact />
                <hr style={{borderColor: "white"}} />
			</div>
		);
	}
}

export default Home; 
import React, { Component } from 'react'; 
import '../App.css';
import { Col } from "react-bootstrap";

class Home extends Component {
	render() {

		return (
			<div className="homeContainer">
                <h1>Hello!</h1>
                <h2>I&rsquo;m Valentina Dibs.</h2>
                <Col sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                    <p style={{paddingTop: 20}}>
                        I am a 4th year at UC San Diego where I study Computer Science and Cognitive Science with a
                        specialization in HCI.
                    </p>
                    <p style={{paddingTop: 20}}>
                        I like to get lost in a project. When I'm not at the computer I find myself dreaming (literally) about that 
                        one coding problem that I'm trying to fix. Problem solving and perseverance are my go to.
                    </p>
                    <p style={{paddingTop: 20, paddingBottom: 20}}>
                        I&rsquo;m also a hobbyist. I love to create (code, sing, knit, sew), listen to podcasts
                        (NPR politics + Ted Radio Hour), read (just started One Hundred Years of Solitude), and exercise (bouldering and weight lifting).
                    </p>
                </Col>

			</div>
		);
	}
}

export default Home; 
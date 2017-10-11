import React, {Component} from 'react'; 
import FontAwesome from 'react-fontawesome';
import { Col } from "react-bootstrap";

class Contact extends Component {

	render() {
		return (
			<div className="contactContainer">
				<Col xs={12} sm={6} md={6} lg={6}>
					<a 
						className="contactLink"
						href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" >
							<FontAwesome 
								className="icon"
								name='pencil-square' 
								size='2x' />
							<p className="iconName">Resume</p>
					</a>
				</Col>
				<Col xs={12} sm={6} md={6} lg={6}>
					<a 
						className="contactLink"
						href="https://www.linkedin.com/in/valentina-dibs/">
							<FontAwesome 
								className="icon"
								name='linkedin-square' 
								size='2x' />
							<p className="iconName">LinkedIn</p>
					</a> 
				</Col>
				<Col xs={12} sm={6} md={6} lg={6}>
					<a 
						className="contactLink"
						href="https://github.com/vdibs">
							<FontAwesome 
								className="icon"
								name='github-square' 
								size='2x' />
							<p className="iconName">GitHub</p>
					</a> 
				</Col>
				<Col xs={12} sm={6} md={6} lg={6}>
					<a 
						className="contactLink"
						href="mailto:tina.dibs@gmail.com">
							<FontAwesome 
								className="icon"
								name='envelope-square' 
								size='2x' />
							<p className="iconName">Email</p>
					</a> 
				</Col>
			</div>
		);
	}
} 

export default Contact;
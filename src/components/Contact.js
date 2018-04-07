import React, {Component} from 'react'; 
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from "react-bootstrap";

class Contact extends Component {

	render() {
		return (
			<div className="contactContainer">
			<p>Let's connect!</p>
			<Grid>
				<Row>
					<Col xs={0} sm={0} md={2} lg={2} />
					<Col xs={12} sm={12} md={2} lg={2}>
						<a 
							className="contactLink"
							href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" >
								<FontAwesome 
									className="icon"
									name='pencil-square' 
									size='lg' />
								<p className="iconName">Resume</p>
						</a>
					</Col>
					<Col xs={12} sm={12} md={3} lg={2}>
						<a 
							className="contactLink"
							href="https://www.linkedin.com/in/valentina-dibs/">
								<FontAwesome 
									className="icon"
									name='linkedin-square' 
									size='lg' />
								<p className="iconName">LinkedIn</p>
						</a> 
					</Col>
					<Col xs={12} sm={12} md={2} lg={2}>
						<a 
							className="contactLink"
							href="https://github.com/vdibs">
								<FontAwesome 
									className="icon"
									name='github-square' 
									size='lg' />
								<p className="iconName">GitHub</p>
						</a> 
					</Col>
					<Col xs={12} sm={12} md={2} lg={2}>
						<a 
							className="contactLink"
							href="mailto:tina.dibs@gmail.com">
								<FontAwesome 
									className="icon"
									name='envelope-square' 
									size='lg' />
								<p className="iconName">Email</p>
						</a> 
					</Col>
				</Row>
			</Grid>
			</div>
		);
	}
} 

export default Contact;
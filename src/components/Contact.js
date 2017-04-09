import React, {Component} from 'react'; 
import FontAwesome from 'react-fontawesome';

class Contact extends Component {

	render() {
		return (
			<div className="contact">
				<h2 className="linked">Contact</h2>
				
				<a 
					className="contactLink"
					href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" >
						<FontAwesome 
							className="icon"
							name='pencil-square' 
							size='2x' />
						<p className="iconName">Resume</p>
				</a>
				<a 
					className="contactLink"
					href="https://www.linkedin.com/in/valentina-dibs/">
						<FontAwesome 
							className="icon"
							name='linkedin-square' 
							size='2x' />
						<p className="iconName">LinkedIn</p>
				</a> 
				<a 
					className="contactLink"
					href="https://github.com/vdibs">
						<FontAwesome 
							className="icon"
							name='github-square' 
							size='2x' />
						<p className="iconName">GitHub</p>
				</a> 
				<a 
					className="contactLink"
					href="mailto:tina.dibs@gmail.com">
						<FontAwesome 
							className="icon"
							name='envelope-square' 
							size='2x' />
						<p className="iconName">Email</p>
				</a> 
			</div>
		);
	}
} 

export default Contact;
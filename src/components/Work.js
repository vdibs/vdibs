import React, { Component } from 'react'; 
import '../App.css';
import WorkObject from './WorkObject'; 

class Work extends Component {
	render() {

		var summerD = "I'm on the hunt for a Summer 2017 Internship.";

		var truMedD = "I support the software for the Accuvax.";

		var williamD = "Developed investors.com with WordPress and built a Recent Related Posts plugin with the WordPress API.";

		return (
			<div className="workContainer">
			<link href='https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter'
            rel='stylesheet'
            type='text/css' />
				<p className="linked">Work</p>
				<WorkObject 
					time="Summer 2017" 
					company="TBD" 
					position="TBD" 
					description={summerD}/>
				<a href="http://trumedsystems.com">
					<WorkObject 
						time="Winter Spring 2017" 
						company="TruMed Systems" 
						position="Software Engineer + Quality Assurance Intern" 
						description={truMedD}/>
				</a>
				<a href="http://investors.com">
					<WorkObject
						time="Summer 2016" 
						company="William O'Neil: Investors Business Daily" 
						position="Web Development Intern" 
						description={williamD}/> 
				</a>
				<div className="timeline"></div> 
				<a 
					href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" 
					className="resume">
						Resume
				</a>
			</div>
		);
	}
}

export default Work; 
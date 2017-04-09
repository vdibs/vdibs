import React, { Component } from 'react'; 
import '../App.css';
import WorkObject from './WorkObject'; 

class Work extends Component {
	render() {

		var summerD = "Incoming software engineering intern.";

		var truMedD = "I support the software for the Accuvax.";

		var williamD = "Developed investors.com with WordPress and built a Recent Related Posts plugin with the WordPress API.";

		var arrTBD = ["TBD"];

		var arrTMS = ["Batch Script", "CI", "TeamCity", "Unit Testing"];

		var arrWO = ["WordPress", "PHP", "HTML", "CSS", "JS"];

		return (
			<div className="workContainer">
			<link href='https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter'
            rel='stylesheet'
            type='text/css' />
				<h2 className="linked">Work</h2>
				<a href="http://truecar.com">
					<WorkObject 
						time="Summer 2017" 
						company="TrueCar" 
						position="Software Engineer Intern" 
						description={summerD} 
						skill={arrTBD}  />
				</a>
				<a href="http://trumedsystems.com">
					<WorkObject 
						time="Winter Spring 2017" 
						company="TruMed Systems" 
						position="Software Engineer + Quality Assurance Intern" 
						description={truMedD}
						skill={arrTMS}/>
				</a>
				<a href="http://investors.com">
					<WorkObject
						time="Summer 2016" 
						company="William O'Neil: Investors Business Daily" 
						position="Web Development Intern" 
						description={williamD}
						skill={arrWO}  /> 
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
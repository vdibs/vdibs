import React, { Component } from 'react'; 
import '../App.css';
import WorkObject from './WorkObject'; 


class Work extends Component {
	render() {

		const trueCar = {
			description: "Built Prototypr, a drag and drop React app that enables users to create prototypes and dynamically generate React code. It uses TrueCar's boilerplate Gluestick and their component library Battery Pack. I worked with a makeshift Prototyper team that consisted of a Manager, Product Lead, a UX Lead, and a Front End Tech Lead for reference.",
			skill: ["React", "Redux", "react-dnd", "JS", "HTML", "Ruby on Rails"],
		}

		const truMed = {
			description: "Wrote a batch script to automate prereleases on Github using the GitHub API.\n Developed the AccuVax interface in C#, .Net, and MVVM pattern.",
			skill: ["Batch Script", "CI", "TeamCity", "Unit Testing"],
		}

		const williamONeil = {
			description: "Developed investors.com with WordPress and built a Recent Related Posts plugin with the WordPress API.",
			skill: ["WordPress", "PHP", "HTML", "CSS", "JS"],
		}

		return (
			<div className="workContainer">
			<link href='https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter'
            rel='stylesheet'
            type='text/css' />
				<a href="http://truecar.com">
					<WorkObject 
						time="Summer 2017" 
						company="TrueCar" 
						position="Software Engineer Intern" 
						description={trueCar.description} 
						skill={trueCar.skill}  />
				</a>
				<a href="http://trumedsystems.com">
					<WorkObject 
						time="Wi/Sp 2017" 
						company="TruMed Systems" 
						position="Software Engineer Intern" 
						description={truMed.description}
						skill={truMed.skill}/>
				</a>
				<a href="http://investors.com">
					<WorkObject
						time="Summer 2016" 
						company="William O'Neil: Investors Business Daily" 
						position="Web Development Intern" 
						description={williamONeil.description}
						skill={williamONeil.skill}  /> 
				</a>
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
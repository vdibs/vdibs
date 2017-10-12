import React, { Component } from 'react'; 
import '../App.css';
import WorkObject from './WorkObject'; 


class Work extends Component {
	render() {

		const trueCar = {
			description: "Built Prototypr, a drag and drop React app that enables users to create prototypes and dynamically generate React code. It uses TrueCar's boilerplate Gluestick and their component library Battery Pack. I worked with a makeshift Prototyper team that consisted of a Manager, Product Lead, a UX Lead, and a Front End Tech Lead for reference.",
			skill: ["React", "Redux", "react-dnd", "JS", "HTML", "Ruby on Rails"],
			img: "https://www.healthcarefamilycreditunion.org/cmss_files/imagelibrary/truecar-color-print-large-transparent-01.png",
		}

		const truMed = {
			description: "Wrote a batch script to automate prereleases on Github using the GitHub API.\n Developed the AccuVax interface in C#, .Net, and MVVM pattern.",
			skill: ["Batch Script", "CI", "TeamCity", "Unit Testing"],
			img: "http://evonexus.org/wp-content/uploads/2013/12/pl_trumed-300x183.png",
		}

		const williamONeil = {
			description: "Developed investors.com with WordPress and built a Recent Related Posts plugin with the WordPress API.",
			skill: ["WordPress", "PHP", "HTML", "CSS", "JS"],
			img: "https://www.williamoneil.com/wp-content/themes/won_research/images/logo.png",
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
						skill={trueCar.skill}
						img={trueCar.img}  />
				</a>
				<a href="http://trumedsystems.com">
					<WorkObject 
						time="Wi/Sp 2017" 
						company="TruMed Systems" 
						position="Software Engineer Intern" 
						description={truMed.description}
						skill={truMed.skill}
						img={truMed.img} />
				</a>
				<a href="http://investors.com">
					<WorkObject
						time="Summer 2016" 
						company="William O'Neil: Investors Business Daily" 
						position="Web Development Intern" 
						description={williamONeil.description}
						skill={williamONeil.skill}  
						img={williamONeil.img}/> 
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
import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 

class Project extends Component {

	render() {

		const prototypr = {
			description: "A Drag and Drop React Prototype Builder intended to decrease the iteration time between designers and developers. It enables users to drag and drop components on a page and generate the React code dynamically, allowing the design and code to be passed around and altered both easily and efficiently.",
			skill: ["React", "Redux", "react-dnd", "JS", "HTML", "Jest"],
		}

		const personalSite = {
			description: "The old version of this site is at valentinadibs1.herokuapp.com. Both sites were made with React. ",
			skill: ["React", "JS", "HTML", "CSS"],
		}
		
		const actEmotion = {
			description: "A personal informatics site that allows users to track their emotions in relation to their activities. It allows users to make important life decisions based on data instead of mood.",
			skill: ["React", "JS", "HTML", "CSS", "Google Analytics"],
		}

		const wpPlugin = {
			description: "A Plugin made with the WordPress API during my summer 2016 internship. It displays 5 recent posts that share the same category or tag of the current post at the bottom of the page.",
			skill: ["WordPress API", "PHP", "JS", "HTML", "SCSS"],
		}
		
		const twenty48 = {
			description: "Recreated the game 2048 in java.",
			skill: ["Java", "Java GUI"],
		}
		
		return (
			<div className="projectContainer">
				<ProjectObject 
					key={0}
					time="Summer 2017"  
					company="prototypr" 
					description={prototypr.description} 
					skill={prototypr.skill} />
				<a href="http://valentinadibs1.herokuapp.com">
				<ProjectObject 
					key={1}
					time="Winter 2017"  
					company="This site + The Old Version" 
					description={personalSite.description} 
					skill={personalSite.skill} />
				</a>
				<a href="https://gentle-springs-89276.herokuapp.com/">
				<ProjectObject
					key={2}
					time="Fall 2016" 
					company="Actemotion"  
					description={actEmotion.description} 
					skill={actEmotion.skill} />
				</a>
				<ProjectObject 
					key={3}
					time="Summer 2016"  
					company="WordPress Plugin: Recent Related Posts" 
					description={wpPlugin.description} 
					skill={wpPlugin.skill} />
				<ProjectObject 
					key={4}
					time="Winter 2016"  
					company="2048" 
					description={twenty48.description} 
					skill={twenty48.skill} />
				<a 
					href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" 
					className="resume">
						Resume
				</a>
			</div>
		);
	}
} 

export default Project;
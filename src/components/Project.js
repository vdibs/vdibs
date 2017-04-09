import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 

class Project extends Component {

	render() {

		var description = "The old version of this site is at valentinadibs1.herokuapp.com. Both sites were made with React. ";
		
		var act = "A personal informatics site that allows users to track their emotions in relation to their activities. It allows users to make important life decisions based on data instead of mood.";

		var wordpress = "A Plugin made with the WordPress API during my summer 2016 internship. It displays 5 recent posts that share the same category or tag of the current post at the bottom of the page. "

		var twenty = "Recreated the game 2048 in java.";

		var arrP = ["React", "JS", "HTML", "CSS"];

		var arrAct = ["React", "JS", "HTML", "CSS", "Google Analytics"];

		var arrWP = ["WordPress API", "PHP", "JS", "HTML", "SCSS"];

		var arr2 = ["Java", "Java GUI"];

		return (
			<div>
				<h2 className="linked">Projects</h2>
				<a href="http://valentinadibs1.herokuapp.com">
				<ProjectObject 
					key={1}
					time="Winter 2017"  
					company="This site + The Old Version" 
					description={description} 
					skill={arrP} />
				</a>
				<a href="https://gentle-springs-89276.herokuapp.com/">
				<ProjectObject
					key={2}
					time="Fall 2016" 
					company="Actemotion"  
					description={act} 
					skill={arrAct} />
				</a>
				<ProjectObject 
					key={3}
					time="Summer 2016"  
					company="WordPress Plugin: Recent Related Posts" 
					description={wordpress} 
					skill={arrWP} />
				<ProjectObject 
					key={4}
					time="Winter 2016"  
					company="2048" 
					description={twenty} 
					skill={arr2} />
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

export default Project;
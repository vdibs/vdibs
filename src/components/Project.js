import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 

class Project extends Component {

	render() {

		var description = "The old version of this site is at valentinadibs1.herokuapp.com. Both sites were made with React. ";
		
		var act = "A personal informatics site that allows users to track their emotions in relation to their activities. This way, users can make important life decisions based on data instead of mood.";

		var wordpress = "A Plugin made with the WordPress API. It displays 5 recent posts that share the same category or tag of the current post at the bottom of the page. "

		var twenty = "Recreated the game 2048 in java.";

		return (
			<div>
				<p className="linked">Projects</p>
				<a href="http://valentinadibs1.herokuapp.com">
				<ProjectObject 
					time="Winter 2017"  
					company="This site + The Old Version" 
					description={description} 
					skill='React | JS | HTML | CSS' />
				</a>
				<a href="https://gentle-springs-89276.herokuapp.com/">
				<ProjectObject
					time="Fall 2016" 
					company="Actemotion"  
					description={act} 
					skill='React | JS | HTML | CSS | Google Analytics' />
				</a>
				<ProjectObject 
					time="Summer 2016"  
					company="WordPress Plugin: Recent Related Posts" 
					description={wordpress} 
					skill='WordPress API | PHP | JS | HTML | SCSS' />
				<ProjectObject 
					time="Winter 2016"  
					company="2048" 
					description={twenty} 
					skill='Java | Java GUI' />
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
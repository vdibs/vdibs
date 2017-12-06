import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 
import projectData from "../data/projectData";

class Project extends Component {

	render() {
		
		return (
			<div className="projectContainer">
				{projectData.map((obj, index) => {
					if (obj.href) {
						return(
							<a href={obj.href} key={index}>
								<ProjectObject key={index} {...obj} />
							</a>
						)
					} 
					return <ProjectObject key={index} {...obj} />
					
				})}
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
import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 
import projectData from "../data/projectData";

class Project extends Component {

	render() {
		
		return (
			<div className="projectContainer">
				{projectData.map((obj, index) => { 
					return <ProjectObject key={index} {...obj} />
				})}
			</div>
		);
	}
} 

export default Project;
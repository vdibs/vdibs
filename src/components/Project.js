import React, {Component} from 'react'; 
import ProjectObject from './ProjectObject'; 
import projectData from "../data/projectData";

class Project extends Component {

	render() {
		
		return (
			<div className="projectContainer" id={this.props.id}>
				<div  className="page-title">Projects</div>
				{projectData.map((obj, index) => { 
					return <ProjectObject key={index} {...obj} />
				})}
			</div>
		);
	}
} 

export default Project;
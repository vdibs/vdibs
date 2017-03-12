import React, {Component} from 'react'; 

class ProjectObject extends Component {

	render() {

		return (
			<div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
			
			<div className="timeline"></div> 
			<div className="shadow">
				<div className="work"> 
			    	<div className="quarter">
						<p>{this.props.time}</p>
					</div> 
					<div className="workBody">
						<p className="company">{this.props.company}</p> 
						<p className="description">{this.props.description}</p> 
						{this.props.skill.map(function(skill, index) {
							return <p className="skill">{skill}</p>
						})}
			    	</div>  
				</div> 
			</div>
			</div>
		);
	}
} 

export default ProjectObject;
import React, {Component} from 'react'; 
import { Col } from "react-bootstrap";

class WorkObject extends Component {

	render() {

		return (
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
			
				<div className="work"> 
					<Col xs={12} sm={1} md={1} lg={1}>	
						<div className="quarter">
							<p>{this.props.time}</p>
						</div> 
					</Col>
					<Col  xs={12} sm={8} md={8} lg={8}>
						<div className="workBody">
							<p className="company">{this.props.company}</p>
							<p className="position">{this.props.position}</p>
							<p className="description">{this.props.description}</p>
							{this.props.skill.map(function(skill, index) {
								return <p className="skill">{skill}</p>
							})}
						 </div>
					</Col>
				</div> 
			</div>
		);
	}
} 

export default WorkObject;
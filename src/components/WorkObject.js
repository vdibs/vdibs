import React, {Component} from 'react'; 
import { Grid, Row, Col } from "react-bootstrap";

class WorkObject extends Component {

	render() {
		const props = this.props;
		//const imgPath = require(props.img);
		return (
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
			
				<div className="work">
				<Grid>
					<Row>						
						<Col  xs={0} sm={1} md={1} lg={1} />
						<Col className="workCol" xs={2} sm={2} md={2} lg={2}>
							<div className="workInfo">
								<p className="quarter">{this.props.time}</p>
								<a href={props.href}>
									<img src={props.img}  height={20} alt={props.company + "img"}/> 
								</a>
							</div>
						</Col>
						<Col  xs={12} sm={8} md={7} lg={7}>
							<div className="workBody">
								<p className="company">{props.company}</p>
								<p className="position">{props.position}</p>
								<p className="description">{props.description}</p>
								{props.skill.map(function(skill, index) {
									return <p className="skill">{skill}</p>
								})}
							</div>
						</Col>
				</Row>
				</Grid>
				</div> 
			</div>
		);
	}
} 

export default WorkObject;
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class ProjectObject extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />

        <div className="work">
        <Grid>
					<Row>	
            <Col xs={12} sm={1} md={1} lg={1} />	
            <Col  xs={12} sm={2} md={2} lg={2}>
              <div className="workInfo">
                <p  className="quarter">{this.props.time}</p>
              </div>
            </Col>
            <Col  xs={12} sm={8} md={7} lg={7}>
              <div className="workBody">
                {this.props.href !=  null
                  ? <a href={this.props.href}> <p className="companyLink">{this.props.company}</p></a>
                  : <p className="company">{this.props.company}</p>
                }
                <p className="description">{this.props.description}</p>
                {this.props.skill.map(function(skill, index) {
                  return <p className="skill">{skill}</p>;
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

export default ProjectObject;

import React, { Component } from 'react'; 
import '../App.css';
import WorkObject from './WorkObject'; 
import workData from '../data/workData';

class Work extends Component {
	render() {
		return (
			<div className="workContainer">
				<link 
					href='https://fonts.googleapis.com/css?family=Noto+Serif|Inconsolata:400,700|Bitter'
					rel='stylesheet'
					type='text/css' 
				/>
				{workData.map((obj, ind) => {
						return (
							<a href={obj.href}>
							<WorkObject key={ind} {...obj} />
						</a>
						)
					})
				}
				<a 
					href="https://docs.google.com/a/ucsd.edu/document/d/1uXYQSxyApiBn4YlyilhEBaNWTyy7GoiLNjElhbUk1tc/edit?usp=sharing" 
					className="resume">
						Resume
				</a>
			</div>
		);
	}
}

export default Work; 
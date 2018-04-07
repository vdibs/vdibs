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
							<WorkObject key={ind} {...obj} />
						)
					})
				}
			</div>
		);
	}
}

export default Work; 
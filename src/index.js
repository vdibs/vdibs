import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Project from './components/Project';
 
import { BrowserRouter as Router, Route } from 'react-router-dom';
 

ReactDOM.render(
	<div>
		  
  		<Router>
		  	<div>
		  		<Route exactpath="/" component={App} /> 
		  		<Route path="/project" component={Project} />
		  	</div>
   		</Router>
   </div>,
  document.getElementById('root')
);

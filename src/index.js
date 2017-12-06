import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Project from './components/Project';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from 'react-router-dom';
 

ReactDOM.render(
	<div>
		<Helmet>
			<meta charset="utf-8" />
			<title>Valentina Dibs</title>
			<meta name="description" content="Valentina Dibs' personal professional site. UCSD student and incoming Software Engineer at Reddit." />
			<meta name="keywords" content="Valentina Dibs, student, intern, web developer, software engineer, UCSD, React" />
			<meta name="author" content="Valentina Dibs" />
		</Helmet>
  		<Router>
		  	<div>
		  		<Route exactpath="/" component={App} /> 
		  		<Route path="/project" component={Project} />
		  	</div>
   		</Router>
   </div>,
  document.getElementById('root')
);

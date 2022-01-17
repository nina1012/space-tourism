import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Nav />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

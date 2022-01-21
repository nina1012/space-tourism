import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import { SizeProvider } from './context/SizeContext';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<SizeProvider>
				<>
					<Nav />
					<App />
				</>
			</SizeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import { GlobalProvider } from './context/GlobalContext';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalProvider>
				<>
					<Nav />
					<App />
				</>
			</GlobalProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

import { Routes, Route } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
	const { screenSize: size, pathname } = useMediaQuery();

	return (
		<div
			className='background-utils text-white px-8 pb-20'
			// background image's url will be dynamic and will depend on screen width and pathname
			style={{
				backgroundImage: `url(./assets${
					pathname === '/' ? '/home' : pathname
				}/background-${
					pathname === '/' ? 'home' : pathname.replace(/\//, '')
				}-${
					size[0] < 768 ? 'mobile' : size[0] < 1100 ? 'tablet' : 'desktop'
				}.jpg)`,
				padding: `${
					pathname == '/technology' && size[0] < 1100 ? '0' : '0 1.5rem'
				}`,
			}}
		>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology />} />
			</Routes>
		</div>
	);
}

export default App;

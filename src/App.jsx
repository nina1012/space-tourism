import { Routes, Route } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { useLocation } from 'react-router-dom';
import { getBgImageByPathname } from './utils/getBgImageByPathname';

function App() {
	const { screenSize: size } = useMediaQuery();
	const { pathname } = useLocation();

	const backgroundImageUrl = getBgImageByPathname(pathname, size); // background image's url will be dynamic and will depend on screen width and pathname

	return (
		<div
			className='background-utils text-white px-8 pb-20'
			style={{
				backgroundImage: backgroundImageUrl,
				padding: `${
					pathname == '/technology' && size[0] < 1100 ? '0' : '0 1.5rem' // on technology page, no padding
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

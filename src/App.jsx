import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
	const { screenSize: size, pathname } = useMediaQuery();

	return (
		<div
			className='background-utils'
			// background image's url will be dynamic and will depend on screen width and pathname
			style={{
				backgroundImage: `url(./assets${
					pathname === '/' ? '/home' : pathname
				}/background-${
					pathname === '/' ? 'home' : pathname.replace(/\//, '')
				}-${
					size[0] < 768 ? 'mobile' : size[0] < 1100 ? 'tablet' : 'desktop'
				}.jpg)`,
			}}
		>
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='/destination' element={<h1>Destination</h1>} />
				<Route path='/crew' element={<h1>Crew</h1>} />
				<Route path='/technology' element={<h1>Technology</h1>} />
			</Routes>
		</div>
	);
}

export default App;

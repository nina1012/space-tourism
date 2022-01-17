import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const useMediaQuery = () => {
	const [screenSize, setScreenSize] = useState([0, 0]);
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		const updatingSizes = () => {
			setScreenSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener('resize', updatingSizes);
		updatingSizes();
		return () => window.removeEventListener('resize', updatingSizes);
	}, []);
	return { screenSize, pathname, screen };
};

export default useMediaQuery;

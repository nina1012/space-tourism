import { createContext, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
	const { screenSize: size } = useMediaQuery();
	const [activeNav, setActiveNav] = useState('home');
	return (
		<SizeContext.Provider value={{ size, setActiveNav, activeNav }}>
			{children}
		</SizeContext.Provider>
	);
};

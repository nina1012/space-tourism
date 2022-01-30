import { createContext, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const { screenSize: size } = useMediaQuery();
	const [activeNav, setActiveNav] = useState('home');
	return (
		<GlobalContext.Provider value={{ size, setActiveNav, activeNav }}>
			{children}
		</GlobalContext.Provider>
	);
};

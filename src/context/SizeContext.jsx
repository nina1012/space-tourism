import { useContext, createContext } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
	const { screenSize: size } = useMediaQuery();
	return <SizeContext.Provider value={size}>{children}</SizeContext.Provider>;
};

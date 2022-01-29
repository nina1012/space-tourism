import { useEffect } from 'react';

export const useOnClickOutside = (ref, eventHandler) => {
	useEffect(() => {
		const listener = (e) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			eventHandler(e);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			// removing events
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, eventHandler]);
};

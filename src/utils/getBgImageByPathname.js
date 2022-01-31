export const getBgImageByPathname = (pathname = '/', size = 'desktop') => {
	const folderName = pathname === '/' ? '/home' : pathname;
	const path = pathname === '/' ? 'home' : pathname.replace(/\//, '');
	const screen =
		size[0] < 768 ? 'mobile' : size[0] < 1100 ? 'tablet' : 'desktop';

	return `url(./assets${folderName}/background-${path}-${screen}.jpg)`;
};

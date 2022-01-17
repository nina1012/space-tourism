module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primaryDark: 'hsl(230, 35%,7%)',
				secondaryLight: 'hsl(231,77%,90%)',
			},
			fontSize: {
				heading1: '150px',
				heading2: '100px',
				heading3: '56px',
				heading4: '32px',
				heading5: '28px',
				subheading1: '28px',
				navLink: '16px',
			},
			fontFamily: {
				barlowCondensed: ['Barlow Condensed', 'sans-serif'],
				bellefair: ['Bellefair', 'serif'],
			},
			boxShadow: {
				'3xl': '0 0 0 1rem rgba(255, 255, 255, 1)',
			},
		},
		screens: {
			sm: '375px',
		},
		letterSpacing: {
			heading5LetterSpace: '4.75px',
			subheading2LetterSpace: '2.35px',
			navTextLetterSpace: '2.7px',
		},
	},
	plugins: [],
};

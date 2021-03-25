const colors = require('tailwindcss/colors');
module.exports = {
	purge: [ './components/**/*.js', './pages/**/*.js' ],
	theme: {
		colors: {
			brand: {
				normal: '#52057b',
				light: '#892cdc',
				bright: '#bc6ff1'
			},
			...colors
		}
	}
};

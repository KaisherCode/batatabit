/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			Montserrat:['Montserrat','sans-serif'],
		  },
		  textColor:{
			'primary': '#fd8f0b',
			'secondary': '#1A9AF7',
			'soft-orange': '#FFE9D5',
			'soft-blue' :'#E7F5FF',
			'off-white': '#FAF8F7',
			'just-white': '#FFF',
			'warm-black': '#201E1C',
			'gray': '#414040',
		  },
		  backgroundColor: theme => ({
			...theme('colors'),
			'primary': '#fd8f0b',
			'secondary': '#1A9AF7',
			'soft-orange': '#FFE9D5',
			'soft-blue' :'#E7F5FF',
			'just-white': '#FFF',
			'background-dark': '#191D1D',
			'background-light': '#F3FFFF',
		  }),
		extend: {},
	},
	plugins: [],
}

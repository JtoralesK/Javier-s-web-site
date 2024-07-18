/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
			  'sm': { 'max': '599px' },
			  'lg': '924px',
			  'xl': '1024px',
			},
		  },
	},
	plugins: [],
}

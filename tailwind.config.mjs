/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			screens: {
			  'sm': { 'max': '599px' },
			  'md': '768px',
			  'lg': '924px',
			  'xl': '1024px',
			},
			colors: {
				'gray-1': '#718096', 
				'gray-2': '#4A5568',
				"principal-color":"#FFFFFF",
				"second-color":"#F8F8FF",
				"third-color":"#708090",
				"dark-one":"#030712",
				"dark-two":"#111827",
				"dark-three":"#374151",
			  },
			
		  },
	},
	plugins: [],
}

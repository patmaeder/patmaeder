/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1080px',
			},
		},
		fontFamily: {
			sans: ["noto-sans", "sans-serif"],
			serif: ["cy", "sans-serif"],
		},
		extend: {
			colors: {
				'cyprus': {
					'50': '#effefb',
					'100': '#c9fef8',
					'200': '#94fbf0',
					'300': '#56f2e7',
					'400': '#23ded6',
					'500': '#0bc1bd',
					'600': '#059c9b',
					'700': '#097b7c',
					'800': '#0d6062',
					'900': '#104f51',
					'950': '#023c40',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: "selector",
}

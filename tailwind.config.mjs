/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ["noto-sans", "sans-serif"],
			serif: ["cy", "sans-serif"],
		},
		extend: {
			colors: {
				'my-sin': {
					'50': '#fffdea',
					'100': '#fff8c5',
					'200': '#fff185',
					'300': '#ffe446',
					'400': '#ffd31b',
					'500': '#fbaf00',
					'600': '#e28800',
					'700': '#bb5f02',
					'800': '#984908',
					'900': '#7c3c0b',
					'950': '#481e00',
				},
			},
		},
	},
	plugins: [],
	darkMode: "selector",
}

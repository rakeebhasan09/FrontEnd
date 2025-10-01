/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rajdhani: ["Rajdhani", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				brand: "#FF014F",
			},
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["#060606"],
	},
};

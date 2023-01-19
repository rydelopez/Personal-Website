/** @type {import('tailwindcss').Config} */
module.exports = {
	// purge: ["./src/**/*.html", "./src/**/*.js"],
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			fontFamily: {
				burtons: "burtons",
				leaguespartan: "leaguespartan",
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				mainBlack: "#3A3A5B",
				mainGray: "#8A8CA5",
				lightGray: "#E7E7E8",
				mainBlue: "#408EC6",
				lightBlue: "#ADD8E6",
				maroon: "#7A2048",
				brightMaroon: "#C32148",
			},
		},
	},
	plugins: [],
};

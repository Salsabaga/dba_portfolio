const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			main: ["Ubuntu", "sans-serif"],
		},
		screens: {
			xs: { min: "280px", max: "640px" },
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				"cloud-background": "url(images/Cloudy.svg)",
				"shape-background": "url(images/Colored_Shapes.svg)",
			},
			animation: {
				slideInFromLeft: "slideInFromLeft 1.5s ease-in-out 1",
				fadeIn: "fadeIn 2s ease-in-out 1",
				barFadeIn: "fadeIn 1s ease-in 1",
				wiggle: "wiggle .5s ease-in-out infinite",
			},
			keyframes: {
				slideInFromLeft: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(4deg)" },
				},
			},
		},
	},
	plugins: [],
};

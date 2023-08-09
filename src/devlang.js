import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

export const webDev = [
	{
		id: 1,
		language: "Javascript",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		id: 2,
		language: "HTML",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
	},
	{
		id: 3,
		language: "CSS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
	},
	{
		id: 4,
		language: "NodeJS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	{
		id: 5,
		language: "Express",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
	},
	{
		id: 6,
		language: "ReactJS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
];

export const projects = [
	{
		id: 0,
		projectName: "Flashcards with React",
		projectDescription:
			"A simple Flashcard app with rotating cards that show both sides. Made using ReactJS, MaterialUI and CSS",
		projectImg: "flashcards-react-preview",
		projectLinks: [
			{
				link: "https://github.com/Salsabaga/flashcard-react-app",
				icon: faGithub,
			},
			{
				link: "https://salsabaga.github.io/flashcard-react-app/",
				icon: faDesktop,
			},
		],
	},
	{
		id: 2,
		projectName: "Interactive Card Details Form",
		projectDescription:
			"A Card detail form that changes the details of the card while typing using NextJs and CSS Modules, deployed using Netlify.",
		projectImg: "interactive-card-form-preview",
		projectLinks: [
			{
				link: "https://github.com/Salsabaga/InteractiveCreditCardForm",
				icon: faGithub,
			},
			{
				link: "https://eloquent-bubblegum-1ce418.netlify.app/",
				icon: faDesktop,
			},
		],
	},
	{
		id: 3,
		projectName: "Interactive Pricing UI",
		projectDescription:
			"Pricing page with a slider changing the price with an option to affect the billing. Made using HTML, CSS and Vanilla Javascript",
		projectImg: "interactive-pricing-preview",
		projectLinks: [
			{
				link: "https://github.com/Salsabaga/interactive-pricing-ui",
				icon: faGithub,
			},
			{
				link: "https://salsabaga.github.io/interactive-pricing-ui/",
				icon: faDesktop,
			},
		],
	},
	{
		id: 4,
		projectName: "UK Government: London MP Search",
		projectDescription:
			"Interactive Map of London Boroughs that returns its current representative via click or search bar. Made using HTML, CSS, JQuery and House of Commons API",
		projectImg: "interactive-gov-mp-preview",
		projectLinks: [
			{ link: "https://github.com/Salsabaga/LondonGovVotes", icon: faGithub },
			{ link: "https://salsabaga.github.io/LondonGovVotes/", icon: faDesktop },
		],
	},
];

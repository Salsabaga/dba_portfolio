import { useRef } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
	const pageRefs = useRef({});

	return (
		<main className="m-0 block font-main">
			<Navbar pageRefs={pageRefs} />
			<Header pageRefs={pageRefs} />
			<Skills />
			<Projects pageRefs={pageRefs} />
		</main>
	);
}

export default App;

import { useEffect, useState } from "react";

const Navbar = ({ pageRefs }) => {
	const [stickyNav, setStickyNav] = useState("relative");

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);
		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowBoxHeight = window.scrollY;
			windowBoxHeight > 500
				? setStickyNav("sticky animate-barFadeIn")
				: setStickyNav("relative");
		}
	};
	const scrollView = (type) => {
		pageRefs.current[type].scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<nav
			className={`flex justify-around items-center text-white ${stickyNav} top-0 bg-orange-500 z-10 xs:py-0 py-4`}
		>
			<ul className="flex">
				<li className="xs:py-8 xs:px-8 md:px-8">
					<button
						className="nav-hover xs:text-xl"
						onClick={() => scrollView("about")}
					>
						About
					</button>
				</li>
				<li className="xs:py-8 xs:px-8 md:px-8">
					<button
						className="nav-hover xs:text-xl"
						onClick={() => scrollView("project")}
					>
						Projects
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

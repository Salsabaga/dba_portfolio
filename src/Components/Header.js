import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

const Header = ({ pageRefs }) => {
	const [copyEmail, setCopyEmail] = useState("dbalabr.work@gmail.com");
	const [copyClicked, isCopyClicked] = useState(false);
	const [hover, setHover] = useState(false);

	const copy = () => {
		isCopyClicked(true);
		navigator.clipboard.writeText(copyEmail);
	};

	useEffect(() => {
		const interval = setTimeout(() => {
			isCopyClicked(false);
		}, 3000);

		return () => clearInterval(interval);
	}, [copyClicked]);

	return (
		<section
			className="md:flex bg-cloud-background bg-cover text-white px-8 pb-20 lg:justify-around"
			ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
		>
			<div className="text-center lg:h-full animate-slideInFromLeft">
				<div className="flex flex-col items-center py-8">
					<div className="flex justify-center">
						<img
							src={require("../images/profile-pic.jpeg")}
							className="xs:w-32 xs:h-32 lg:w-48 lg:h-48 object-cover rounded-full"
							alt="profile"
						/>
					</div>
				</div>
				<div className="flex flex-col mb-8">
					<h1 className="py-2 text-3xl">Danny Baldeon Abril</h1>
					<p className="py-4">Junior Web Developer</p>
					<p className="md:hidden">{copyEmail}</p>
					<p
						className="xs:hidden cursor-pointer relative"
						onClick={() => copy()}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{copyEmail}
						{copyClicked ? (
							<span className="absolute -right-16 px-4 rounded-lg bg-orange-400 text-white">
								Clicked!
							</span>
						) : (
							<span className="absolute -right-36 px-4 rounded-lg bg-orange-400 text-white">
								{hover && "Copy the email here!"}
							</span>
						)}
					</p>
					<div className="py-4 px-2 flex justify-around">
						<div>
							<a href="https://github.com/Salsabaga" className="w-auto">
								<FontAwesomeIcon icon={faGithub} size="2x" />
							</a>
							<div>My Github</div>
						</div>
						<div>
							<a
								href={require("../files/Danny_Baldeon_Abril_CV.pdf")}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faFileDownload} size="2x" />
							</a>
							<div>Resume PDF</div>
						</div>
					</div>
				</div>
			</div>
			<div className="xs:text-center self-center lg:w-1/2 lg:text-right md:px-12">
				<h2 className="font-bold text-2xl my-2">About Me</h2>
				<p className="xs:text-base md:text-xl leading-relaxed animate-fadeIn">
					I am a Junior Web Developer, recently completed a coding bootcamp and
					expanding my skills beyond to provide efficient applications &
					websites. I am proficient in languages as shown below but I have a
					desire to go further, learn more, and apply high-level proficiency to
					provide the best service for clients and employers.
				</p>
			</div>
		</section>
	);
};

export default Header;

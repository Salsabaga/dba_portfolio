import { webDev } from "../devlang";

const Skills = () => {
	return (
		<div className="skills-container" id="skills">
			<h1 className="text-4xl text-center m-16">Skillset</h1>
			<div className="flex flex-row flex-wrap justify-around">
				{webDev.map((info) => {
					return (
						<img
							key={info.id}
							src={info.img}
							alt={`${info.language} logo`}
							className="xs:h-16 md:h-36 mx-8 my-4"
						></img>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;

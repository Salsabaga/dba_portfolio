import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../devlang";

const Projects = ({ pageRefs }) => {
	return (
		<section
			className="my-24"
			ref={(el) => (pageRefs.current = { ...pageRefs.current, project: el })}
		>
			<div className="text-center text-4xl">Projects</div>
			<div className="grid md:grid-cols-1 lg:grid-cols-2 justify-items-center">
				{projects.map((p) => {
					const {
						id,
						projectName,
						projectDescription,
						projectImg,
						projectLinks,
					} = p;
					return (
						<div key={id} className="m-8 shadow-2xl">
							<div className="md:flex">
								<div className="relative group shrink-0">
									<img
										className="md:w-72 lg:w-96 h-56 object-cover opacity-100 transition ease-in duration-300 group-hover:opacity-30"
										src={require(`../images/projects-images/${projectImg}.png`)}
										alt={projectName}
									/>
									<div className="absolute w-full block p-8 top-1/2 left-1/2 transition ease-in duration-300 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100">
										<div className="text-2xl text-center">{projectName}</div>
										<div className="py-4">{projectDescription}</div>
									</div>
								</div>
							</div>
							<div className="card-details">
								<div className="flex justify-evenly">
									{projectLinks.map((links) => {
										const { link, icon } = links;
										return (
											<div className="w-full">
												<a
													href={link}
													className="btn w-full text-center  transition ease-in duration-300 hover:bg-amber-500 hover:text-white"
												>
													<FontAwesomeIcon icon={icon} size="2x" />
												</a>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;

const Projects = ({ data }) => {
    const { projects = [] } = data.professional;

    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Projects
            </h2>

            <div className="h-px bg-black w-full mt-1 mb-2"></div>

            {projects.map((project, index) => (
                <div key={index}>
                    <div className="mb-2">
                        <p className="font-bold text-[18px]">
                            {project.title}
                        </p>

                        <ul className="list-disc ml-6 mt-2 mb-4 text-[15px] leading-[1.45] font-normal text-gray-900">
                            {project.description.map((description, descriptionIndex) => (
                                <li key={descriptionIndex}>
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {index < projects.length - 1 && (
                        <div className="h-px bg-gray-200 w-full my-5"></div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Projects;
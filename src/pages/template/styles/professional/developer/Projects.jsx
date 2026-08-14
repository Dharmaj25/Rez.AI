const Projects = () => {
    const projects = [
        {
            name: "Campus Resource Portal",
            description: [
                "Web platform for students and faculty to book labs, equipment, and study rooms in real time.",
            ],
        },
        {
            name: "DevSearch — Search Engine for Developers",
            description: [
                "Custom search engine that indexes documentation and Stack Overflow threads to answer programming queries.",
            ],
        },
        {
            name: "CodeMate — AI Chatbot for Devs",
            description: [
                "AI coding assistant built with AWS Bedrock and Python to answer programming-related questions.",
            ],
        },
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-600">
                Projects
            </h3>

            <div className="mt-5 space-y-7">
                {projects.map((project, index) => (
                    <div key={index}>
                        {/* Project Name */}
                        <p className="text-[20px] leading-[1.2] font-bold text-slate-700">
                            {project.name}
                        </p>

                        {/* Description */}
                        <ul className="mt-2 list-disc pl-5">
                            {project.description.map((description, index) => (
                                <li
                                    key={index}
                                    className="text-[15px] leading-[1.5] text-gray-900"
                                >
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
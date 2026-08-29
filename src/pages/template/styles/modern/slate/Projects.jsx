const Projects = ({ data }) => {
    const { projects } = data?.professional || {};
    return (
        (projects && projects.length > 0) && (
            <section>
                <h1 className="text-xl font-semibold mb-3">Projects</h1>

                {projects.map((p, index) => (
                    <div className="mb-6" key={index}>
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        {p.description && (
                            <div className="mb-1">
                                <h3 className="text-md font-semibold">Description:</h3>
                                <p className="tex-sm font-light">{p.description}</p>
                            </div>
                        )}
                        {(p.tools && p.tools.length > 0) && (
                            <div className="flex flex-wrap gap-x-1 text-sm font-light">
                                <span className="font-semibold">Tech Stack:</span>
                                <span>{p.tools.join(", ")}</span>
                            </div>
                        )}
                        {(p.key_features && p.key_features.length > 0) && (
                            <div className="flex flex-wrap gap-x-1 text-sm font-light">
                                <span className="font-semibold">Key Features:</span>
                                <span>{p.key_features.join(", ")}</span>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        )
    )
}

export default Projects;
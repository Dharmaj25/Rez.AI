const Experience = ({ data }) => {
    const experience = data?.professional?.experience ?? [];

    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Professional Experience</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2" />

            {Array.isArray(experience) &&
                experience.map((exp, index) => {
                    const duration = [exp.start_date, exp.end_date].filter(Boolean).join(" - ");
                    const organization = exp?.organization?.name ?? "";
                    const experienceMeta = [organization, duration].filter(Boolean).join(" | ");

                    const responsibilities = exp?.responsibilities ?? [];
                    return (
                        <div key={exp.id ?? index}>
                            <div className="mb-2">
                                <h4 className="font-bold">{exp.title}</h4>
                                <p className="font-light">{experienceMeta}</p>
                            </div>

                            {Array.isArray(responsibilities) && (
                                <ul className="list-disc pl-6">
                                    {responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
        </section>
    );
};

export default Experience;
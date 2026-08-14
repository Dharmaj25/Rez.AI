const Skills = () => {
    const skills = [
        "Java",
        "Spring Boot",
        "SQL",
        "Python",
        "Django",
        "React",
        "AWS",
        "JavaScript",
        "REST",
        "Docker",
        "Kafka",
        "Git",
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-600">
                Skills
            </h3>

            <ul className="mt-5 grid grid-cols-3 gap-y-5">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="list-disc ml-4 text-[16px] leading-none text-slate-800"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
const Experience = ({ data }) => {

    const { experience } = data?.professional || {};

    return (
        experience && experience.length > 0 &&
        (
            <section>
                <h1 className="text-xl font-semibold">Work Experience</h1>
                {experience && experience.map((exp, index) => (
                    <div key={index}>
                        <h3 className="text-md font-semibold">Full Stack Developer, TechNova Solutions</h3>
                        <p className="text-[13px] font-light my-1">Jan 2024 - Present</p>
                        <ul className="list-disc text-[11px] pl-3 mb-4">
                            {exp.responsibilites.map((r, index) => (
                                <li key={index} >{r}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        )
    )
}

export default Experience
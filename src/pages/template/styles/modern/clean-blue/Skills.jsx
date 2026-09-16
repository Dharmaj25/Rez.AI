const Skills = ({ data }) => {
    const { skills } = data?.professional || {};

    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Technical Skills</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2"></div>
            <ul className="list-disc mt-3 pl-6 grid grid-cols-2 gap-y-1 gap-x-8">
                {(skills && skills.length > 0) && skills.map((skill, index) => (
                    <li key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
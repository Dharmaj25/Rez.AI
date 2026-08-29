const Skills = ({ data }) => {

    const skills = data.professional.skills || [];
    const SkillGroups = Object.groupBy(skills, (skill) => skill.type);

    const baseTextClass = "text-white text-[13px]";

    return (
        <section>
            <h1 className="text-white font-semibold text-xl mb-1">Skills</h1>
            <div className="flex flex-col gap-2">
                {Object.keys(SkillGroups).map((type) => ((
                    <div>
                        <p className={baseTextClass + " text-[12px] font-semibold"}>{type}</p>
                        <ul className="list-disc pl-5">
                            {SkillGroups[type].map((skill) => (
                                <li className={baseTextClass}>{skill.title}</li>
                            ))}
                        </ul>
                    </div>
                )))}
            </div>
        </section>)
}

export default Skills;
const Skills = ({ data }) => {

    const { skills } = data?.professional || {};

    let skillGroups = {};
    if (skills) {
        skillGroups = Object.groupBy(skills, (skill) => skill.type);
    }

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] border-b-gray-300 uppercase font-semibold text-xl mb-2">
                Expertise
            </h3>
            {Object.keys(skillGroups).map((grp, index) => (
                <div className="mb-3" key={index}>
                    <h4 className="font-semibold uppercase tracking-widest">{grp}</h4>
                    <ul className="pl-6 list-disc">
                        {skillGroups[grp].map((skill, inner_index) => (
                            <li key={inner_index} className="text-[14px]">{skill.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}
export default Skills;
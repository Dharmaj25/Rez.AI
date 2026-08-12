export const Skills = ({ data }) => {
    const { skills = [] } = data?.professional || {};

    if (!skills.length) return null;

    return (
        <section className="w-full mb-7">
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Skills
            </h2>

            <div className="w-full h-px bg-gray-400 mt-2 mb-3" />

            <ul className="list-disc pl-5 space-y-1">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="pl-1 text-[14px] leading-[1.4]"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};
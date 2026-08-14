const Achievements = () => {
    const achievements = [
        "Winner, Smart India Hackathon (2021) — Built a real-time flood-prediction dashboard among 200+ teams.",
        "Best Intern Award, Bluewave Technologies (2023).",
        "Published Technical Article on microservices scaling, featured on Dev.to (10K+ reads).",
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-600">
                Achievements
            </h3>

            <ul className="mt-5 list-disc pl-5 space-y-4">
                {achievements.map((achievement, index) => (
                    <li
                        key={index}
                        className="text-[15px] leading-[1.5] text-gray-900"
                    >
                        {achievement}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
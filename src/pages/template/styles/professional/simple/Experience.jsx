export const Experience = ({ data }) => {
    const { experience = [] } = data?.professional || {};

    if (!experience.length) return null;

    return (
        <section className="w-full mb-7">
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Work Experience
            </h2>

            <div className="w-full h-px bg-gray-400 mt-2 mb-4" />

            <div className="space-y-5">
                {experience.map((exp, index) => {
                    const organization = exp?.organization || {};

                    const location = [
                        organization.city,
                        organization.state || organization.country,
                    ]
                        .filter(Boolean)
                        .join(", ");

                    return (
                        <div
                            key={exp.id || index}
                            className="w-full"
                        >
                            {/* Role + Date */}
                            <div className="w-full flex justify-between items-start gap-6">
                                <div className="min-w-0">
                                    <p className="text-[16px] leading-[1.25] font-bold">
                                        {exp.role}
                                    </p>

                                    <p className="mt-[2px] text-[14px] leading-[1.3] font-semibold">
                                        {organization.name}
                                        {location ? `, ${location}` : ""}
                                    </p>
                                </div>

                                <p className="shrink-0 text-[14px] leading-[1.3] font-bold text-right">
                                    {`${exp.start_date} - ${exp.end_date || "Present"}`}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            {exp.responsibilities?.length > 0 && (
                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                    {exp.responsibilities.map((item, responsibilityIndex) => (
                                        <li
                                            key={responsibilityIndex}
                                            className="pl-1 text-[14px] leading-[1.4]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
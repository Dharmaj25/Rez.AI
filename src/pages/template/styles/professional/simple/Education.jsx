export const Education = ({ data }) => {
    const { education = [] } = data?.professional || {};

    if (!education.length) return null;

    return (
        <section className="w-full mb-7">
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Education
            </h2>

            <div className="w-full h-px bg-gray-400 mt-2 mb-4" />

            <div className="space-y-4">
                {education.map((ed, index) => (
                    <div
                        key={ed.id || index}
                        className="w-full flex justify-between items-start gap-6"
                    >
                        <div className="min-w-0">
                            <p className="text-[16px] leading-[1.3] font-bold">
                                {ed.title}
                            </p>

                            <p className="mt-1 text-[13px] leading-[1.3] font-normal">
                                {[ed.organization.name, ed.organization.city, ed.organization.state || ed.organization.country].join(", ")}
                            </p>

                        </div>

                        <p className="shrink-0 text-[14px] leading-[1.3] font-bold text-right">
                            {`${ed.start_date} - ${ed.end_date}`}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
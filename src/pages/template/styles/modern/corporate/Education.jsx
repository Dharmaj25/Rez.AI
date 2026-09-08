const Education = ({ data }) => {
    const { education } = data?.professional || {};

    if (!education || education.length === 0) return null;

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] border-b-gray-300 uppercase font-semibold text-xl">
                Education
            </h3>

            <div className="mt-2 flex flex-col gap-4">
                {education.map((ed, index) => {
                    const org = ed?.organization;
                    const location = [org?.city, org?.state, org?.country].filter(Boolean).join(', ');

                    return (
                        <div key={ed.id || index}>
                            {ed?.title && (
                                <h5 className="font-semibold text-[14px] uppercase">{ed.title}</h5>
                            )}

                            {location && (
                                <p className="font-light text-[14px]">{location}</p>
                            )}

                            {ed?.start_date && ed?.end_date && (
                                <p className="font-light text-[14px]">{`${ed.start_date} - ${ed.end_date}`}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
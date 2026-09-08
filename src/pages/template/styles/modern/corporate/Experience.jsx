const Experience = ({ data }) => {

    const { experience } = data?.professional || {}

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] mb-3 border-b-gray-300 uppercase font-semibold text-xl">
                Professional Experience
            </h3>
            <div className="flex flex-col gap-6">
                {experience && experience.length > 0 && (
                    experience.map((exp, index) => {
                        const org = exp.organization;
                        const location = [org?.city, org?.state, org?.country].filter(Boolean).join(", ");
                        const duration = [exp?.start_date, exp?.end_date].filter(Boolean).join("- ");
                        return (
                            <div key={index}>
                                <div className="mb-2">
                                    {exp.title && (
                                        <h4 className="text-[14px] font-semibold">{exp.title}</h4>
                                    )}
                                    <h5 className="text-[14px] font-light">
                                        {[org?.name, location, duration].filter(Boolean).join("| ")}
                                    </h5>
                                </div>

                                <ul className="pl-6 list-disc flex flex-col gap-2 max-w-[85%] text-[14px]">
                                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                                        exp.responsibilities.map((res, index) => (
                                            <li key={index}>{res}</li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        )
                    })
                )}
                <div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
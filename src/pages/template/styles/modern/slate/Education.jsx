const Education = ({ data }) => {
    const education = data.professional.education || [];
    const baseTextClass = "text-white text-[11px]";

    return (
        <section classname="flex flex-col gap-2">
            <h1 className="text-white font-semibold text-xl mb-1">Education</h1>
            {education && education.map((ed) => (
                <div className="flex flex-col mb-2">
                    <p className={baseTextClass + " font-semibold"}>{ed.title}</p>
                    {ed.organization && (<>
                        <p className={baseTextClass}>{ed.organization.name}</p>
                        <p className={baseTextClass}>
                            {ed.organization.city && `${ed.organization.city}, `}
                            {ed.organization.state && `${ed.organization.state}, `}
                            {ed.organization.country && `${ed.organization.country}`}
                        </p>
                    </>)}
                    {ed.start_date && ed.end_date && (
                        <p className={baseTextClass}>{`${ed.start_date} - ${ed.end_date}`}</p>
                    )}
                </div >
            ))}
        </section>
    )
}

export default Education;
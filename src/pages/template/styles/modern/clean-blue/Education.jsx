const Education = ({ data }) => {

    const { education } = data?.professional || {};

    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Education</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2"></div>
            <div className="flex flex-col gap-6">
                {
                    education && education.length > 0 && education.map((ed) => (
                        <div>
                            <h4 className="text-md font-bold">{ed.title}</h4>
                            <h4 className="text-md font-light">
                                {ed.organization.name ? ed.organization.name : ""}
                                {ed.end_date ? ` | Graduated : ${ed.end_date}` : ""}
                            </h4>
                            <ul className="list-disc pl-8 pt-3">
                                {
                                    ed.achievements.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Education;
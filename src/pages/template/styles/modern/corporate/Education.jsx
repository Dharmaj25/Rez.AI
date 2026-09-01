const Education = ({ data }) => {

    const { education } = data?.professional || {};

    return (
        education && education.length > 0 && (
            <section>
                <h3 className="text-black tracking-wider pb-[5px] border-b-[1px] border-b-gray-300 uppercase font-semibold">Education</h3>

                <div className="mt-2 flex flex-col gap-2">
                    {education.map((ed, index) => (
                        <div key={index}>
                            {ed.title && (
                                <h5 className="font-semibold text-[13px] uppercase">{ed.title}</h5>
                            )}
                            {
                                (ed.city || ed.state || ed.country && (
                                    <p className="font-light text-[12px]">
                                        {city && `${city}, `}
                                        {state && `${state}, `}
                                        {country && `${country}`}
                                    </p>
                                ))
                            }
                            {
                                (ed.start_date && ed.end_date) && (
                                    <p className="font-light text-[12px]">Sep 2016 - Jun 2020</p>
                                )
                            }


                        </div>
                    ))}

                </div>
            </section>
        )

    )
}

export default Education;
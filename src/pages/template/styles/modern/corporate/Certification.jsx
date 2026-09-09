const Certification = ({ data }) => {
    const { certification } = data?.professional || {};

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] mb-3 border-b-gray-300 uppercase font-semibold text-xl">
                Professional Development
            </h3>
            <div className="flex flex-col gap-3">
                {(certification && certification.length > 0) &&
                    certification.map((c, index) => (
                        <div className="flex justify-between" key={index}>
                            <div>
                                <p className="text-[14px] font-semibold">{c.title}</p>
                                <p className="font-light">{c?.organization?.name || ""}</p>
                            </div>
                            <p className="font-light">{c.date || ""}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Certification;
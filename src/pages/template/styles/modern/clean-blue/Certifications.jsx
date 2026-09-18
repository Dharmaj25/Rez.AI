const Certification = ({ data }) => {
    const { certification } = data?.professional || {};
    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Certifications</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2" />
            {certification && Array.isArray(certification) && certification.map((cert, index) => {
                let date = null;
                if (cert?.end_date) {
                    date = `Certified: ${cert?.end_date}`
                }

                const certificationMeta = [cert?.organization?.name, date].filter(Boolean).join(" | ");
                return (
                    <div className="mb-2">
                        <h3 className="font-bold text-md">{cert.title || ""}</h3>
                        <p className="text-md font-light">{certificationMeta}</p>
                    </div>
                )
            })}
        </section>
    )
};

export default Certification;
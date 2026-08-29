const Certification = ({ data }) => {
    const certificates = data.professional.certification || [];
    const baseTextClass = "text-white text-[13px]";

    return (
        <section>
            <h1 className={baseTextClass + 'font-semibold text-xl mb-1'}>Certification</h1>
            <ul className="list-disc pl-3">
                {certificates.map((cert) => (
                    <li className={baseTextClass}>{cert}</li>
                ))}
            </ul>
        </section>
    )
}

export default Certification;
const Certifications = () => {
    const certifications = [
        "AWS Certified Solutions Architect — Associate",
        "Java Spring Boot Developer Certification",
        "Python for Data Structures — Coursera",
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-600">
                Certifications
            </h3>

            <ul className="mt-5 list-disc pl-5 space-y-3">
                {certifications.map((certificate, index) => (
                    <li
                        key={index}
                        className="text-[15px] leading-[1.45] text-gray-900"
                    >
                        {certificate}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Certifications;
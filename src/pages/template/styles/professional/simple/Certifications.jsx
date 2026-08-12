export const Certifications = ({ data }) => {
    const { certifications = [] } = data?.professional || {};

    if (!certifications.length) return null;

    return (
        <section className="w-full">
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Certifications
            </h2>

            <div className="w-full h-px bg-gray-400 mt-2 mb-3" />

            <ul className="list-disc pl-5 space-y-1">
                {certifications.map((cert, index) => (
                    <li
                        key={index}
                        className="pl-1 text-[14px] leading-[1.4]"
                    >
                        {cert}
                    </li>
                ))}
            </ul>
        </section>
    );
};
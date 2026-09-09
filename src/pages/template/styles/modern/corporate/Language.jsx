const Language = ({ data }) => {
    const { language } = data?.professional || {};

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] mb-3 border-b-gray-300 uppercase font-semibold text-xl">
                Languages
            </h3>
            <div className="flex flex-col gap-2 text-[13px]">
                {language && language.map((lang, index) => (
                    <p key={index}>{lang}</p>
                ))}
            </div>
        </section>
    )
};

export default Language;
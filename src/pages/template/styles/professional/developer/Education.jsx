const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology — Computer Science & Engineering",
            institution: "Malaviya National Institute of Technology, Jaipur",
            duration: "(2018 - 2022)",
        },
        {
            degree: "Higher Secondary Education — Science",
            institution: "St. Xavier's Senior Secondary School, Jaipur",
            duration: "(2016 - 2018)",
        },
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-600">
                Education
            </h3>

            <div className="mt-5 space-y-6">
                {education.map((item, index) => (
                    <div key={index}>
                        <p className="text-[20px] leading-[1.2] font-bold text-slate-600">
                            {item.degree}
                        </p>

                        <p className="mt-2 text-[15px] leading-[1.45] font-normal text-gray-900">
                            {item.institution}
                        </p>

                        <p className="mt-1 text-[15px] leading-[1.3] italic text-gray-700">
                            {item.duration}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
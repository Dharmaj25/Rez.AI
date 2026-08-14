const Experience = ({ data }) => {
    const { experience } = data.professional;

    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Experience
            </h2>

            <div className="h-px bg-black w-full mt-1 mb-2"></div>

            {experience.map((item, index) => (
                <div key={index}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold text-[18px] leading-none">
                                {item.role}
                            </p>

                            <p className="font-bold text-[15px] leading-none mt-1">
                                {item.organization.name}
                            </p>
                        </div>

                        <p className="font-bold text-[15px] leading-none">
                            {item.start_date} - {item.end_date},{" "}
                            {item.organization.city}, {item.organization.state}
                        </p>
                    </div>

                    <ul className="list-disc ml-6 mt-2 mb-4 text-[15px] leading-[1.45] font-normal text-gray-900">
                        {item.responsibilities.map((responsibility, responsibilityIndex) => (
                            <li key={responsibilityIndex}>
                                {responsibility}
                            </li>
                        ))}
                    </ul>

                    {index < experience.length - 1 && (
                        <div className="h-px bg-gray-200 w-full my-5"></div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Experience;
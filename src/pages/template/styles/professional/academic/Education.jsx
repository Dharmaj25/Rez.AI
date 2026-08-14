const Eductaion = ({ data }) => {
    const { education = [] } = data.professional;

    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Education
            </h2>

            <div className="h-px bg-black w-full mt-1 mb-2"></div>

            {education.map((item, index) => (
                <div className="mb-3" key={index}>
                    <p className="font-bold text-[18px]">
                        {item.title}
                    </p>

                    <p className="text-[15px] leading-[1.45] font-normal text-gray-900">
                        {item.organization.name} · {item.organization.city},{" "}
                        {item.organization.state} · {item.end_date}
                    </p>
                </div>
            ))}

            <div className="h-px bg-gray-200 w-full my-5"></div>
        </section>
    );
};

export default Eductaion;
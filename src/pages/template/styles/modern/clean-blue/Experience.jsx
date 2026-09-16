const Experience = ({data}) => {
    const {experience} = data?.professional || {}; 

    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Professional Experience</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2"></div>
        </section>
    )
};



const Education = ({ data }) => {

    const { education } = data?.professional || {};

    return (
        <section>
            <h3 className="text-sky-500 mb-2 text-xl uppercase">Education</h3>
            <div className="h-[1px] bg-sky-500 w-full mb-2"></div>
            {
                education && education.length > 0 && education.map((ed) => (
                    <div></div>
                ))
            }
        </section>
    )
}

export default Education;
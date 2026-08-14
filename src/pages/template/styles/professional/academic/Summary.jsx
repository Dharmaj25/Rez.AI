const Summary = ({ data }) => {
    const { pitch } = data.career_target
    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Summary
            </h2>
            <div className="h-px bg-black w-full mt-1 mb-2"></div>
            <p className="text-[15px] leading-[1.45] font-normal text-gray-900">{pitch}</p>
        </section>
    )
}

export default Summary;
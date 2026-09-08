const Summary = ({ data }) => {

    const { summary } = data?.professional || {}

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] border-b-gray-300 uppercase font-semibold text-xl">
                Career Summary
            </h3>
            <p className="mt-3 font-light text-[14px]">
                {summary || ""}
            </p>
        </section>
    )
}

export default Summary;
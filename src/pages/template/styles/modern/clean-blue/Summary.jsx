const Summary = ({ data }) => {
    const { summary } = data?.professional || {}

    if (summary) {
        return (
            <section>
                <h3 className="text-sky-500 mb-2 text-xl uppercase">Summary</h3>
                <div className="h-[1px] bg-sky-500 w-full mb-2"></div>
                <p className="text-md font-light">{summary}</p>
            </section>
        )
    }

    return <></>
}

export default Summary;
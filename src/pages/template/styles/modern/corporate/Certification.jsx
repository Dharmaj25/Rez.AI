const Certification = ({ data }) => {

    const { certification } = data?.professional || {};

    return (
        <section>
            <h3 className="text-black tracking-widest pb-[5px] border-b-[1px] border-b-gray-300 uppercase font-semibold text-xl">
                Professional Development
            </h3>
        </section>
    )
}

export default Certification;
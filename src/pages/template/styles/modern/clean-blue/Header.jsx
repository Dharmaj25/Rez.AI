const Header = ({ data }) => {

    const { first_name, last_name, city, state, country, phone, email } = data?.personal || {};
    const { current_role } = data?.professional || {};

    let address = "";
    let phoneNumber = "";

    if (city || state || country) {
        address = [city, state, country].filter(Boolean).join(", ");
    }

    if (phone) {
        const { code, number } = phone;
        if (code) phoneNumber = `+${code}-`;
        phoneNumber += `${number}`
    }

    return (
        <section className="w-full flex flex-col items-center justify-center font-sans gap-5">
            <div>
                <h1 className="text-5xl font-semibold text-blue-600">
                    {first_name && `${first_name} `}
                    {last_name ? last_name : ""}
                </h1>
                {current_role && (
                    <h3 className="uppercase tracking-wide text-xl font-light text-center mt-1">
                        {current_role}
                    </h3>
                )}
            </div>
            <div className="text-md">
                {[address, phoneNumber, email]
                    .filter(Boolean)
                    .join("\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0")
                }
            </div>
        </section>
    )
};

export default Header;
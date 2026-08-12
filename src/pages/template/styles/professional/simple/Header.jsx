export const Header = ({ data }) => {
    const { first_name, last_name, phone, email, city, country } = data.personal;
    const { linkedin_profile, current_role } = data.professional;

    return (
        <section className="w-full text-center mb-7">
            <h1 className="text-[34px] leading-[1.1] font-bold uppercase tracking-[0.5px]">
                {`${first_name} ${last_name}`}
            </h1>

            {current_role && (
                <h3 className="mt-2 text-[19px] leading-[1.25] font-semibold">
                    {current_role}
                </h3>
            )}

            <p className="mt-3 text-[14px] leading-[1.4] font-normal">
                {[
                    city && country ? `${city}, ${country}` : city || country, email,
                    phone?.country_code && phone?.number
                        ? `${phone.country_code} ${phone.number}`
                        : phone?.number,
                    linkedin_profile,
                ].filter(Boolean).join(" | ")}
            </p>
        </section>
    );
};
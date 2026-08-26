import * as Icons from "../../assets/icons/Icons.jsx";


const Contact = ({ data }) => {
    const { city, state, country, phone, email } = data.personal;
    const { github, portfolio, linkedin_profile } = data.professional;

    const textClass = "text-white text-[11px] font-normal";
    const iconItemClass = "flex items-center gap-1"

    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-white font-semibold text-xl">Contact</h1>
            {(city || state || country) &&
                <div className={iconItemClass}>
                    <Icons.MapPin />
                    <span className={textClass}>
                        {city && `${city}, `}
                        {state && `${state}, `}
                        {country && `${country}`}
                    </span>
                </div>
            }

            {(phone.number) &&
                <div className={iconItemClass}>
                    <Icons.Phone />
                    <span className={textClass}>
                        {phone.code && `(+${phone.code}) `}
                        {phone.number && `${phone.number}`}
                    </span>
                </div>
            }

            {email &&
                <div className={iconItemClass}>
                    <Icons.Mail />
                    <span className={textClass}>{email}</span>
                </div>
            }

            {portfolio &&
                <div className={iconItemClass}>
                    <Icons.Globe />
                    <span className={textClass}>{portfolio}</span>
                </div>
            }

            {github &&
                <div className={iconItemClass}>
                    <Icons.Github />
                    <span className={textClass}>{github}</span>
                </div>
            }

            {linkedin_profile &&
                <div className={iconItemClass}>
                    <Icons.Linkedin />
                    <span className={textClass}>{linkedin_profile}</span>
                </div>

            }

        </section>
    )
};

export default Contact;
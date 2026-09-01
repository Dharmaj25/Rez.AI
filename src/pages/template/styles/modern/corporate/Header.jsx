import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Header = ({ data }) => {
    const { first_name, last_name, phone, email, city, state, country } = data?.personal || {};
    const { linkedin, current_role } = data?.professional || {}

    return (
        <header
            className="w-full text-white px-8 py-10 md:px-12 md:py-12 transition-all duration-300 shadow-xl relative overflow-hidden"
            style={{ backgroundColor: "#031B33" }}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-white uppercase leading-tight select-none">
                        {first_name && `${first_name} `}
                        {last_name && `${last_name}`}
                    </h1>

                    {current_role && (
                        <div className="flex items-center space-x-4 pt-1">
                            <div className="w-16 sm:w-24 md:w-32 h-[1px] bg-slate-400/60 shrink-0"></div>
                            <div className="text-[11px] sm:text-xs md:text-sm tracking-[0.2em] font-light text-slate-300 uppercase leading-snug">
                                <div>{current_role}</div>
                            </div>
                        </div>
                    )}

                </div>

                <div className="flex flex-col items-start md:items-end space-y-3 text-xs sm:text-sm font-light text-slate-200">

                    {phone && phone.number && (
                        <div className="flex items-center space-x-3 group">
                            <span className="tracking-wide text-right">
                                {phone.code && `(+${phone.code}) `}
                                {phone.number}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#031B33] flex items-center justify-center shrink-0 shadow-md">
                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                            </div>
                        </div>
                    )}


                    {email && (
                        <div className="flex items-center space-x-3 group">
                            <span className="tracking-wide text-right">
                                {email}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#031B33] flex items-center justify-center shrink-0 shadow-md">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                            </div>
                        </div>
                    )}

                    {(city || state || country) && (
                        <div className="flex items-center space-x-3 group">
                            <span className="tracking-wide text-right ">
                                {city && `${city}, `}
                                {state && `${state}, `}
                                {country && `${country}`}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#031B33] flex items-center justify-center shrink-0 shadow-md">
                                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                            </div>
                        </div>
                    )}

                    {linkedin && (
                        <div className="flex items-center space-x-3 group">
                            <span className="tracking-wide text-right ">
                                {linkedin}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#031B33] flex items-center justify-center shrink-0 shadow-md">
                                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};


export default Header;

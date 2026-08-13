import { MapPin, Mail, Smartphone, Linkedin } from "lucide-react";

const Header = ({ data }) => {
    return (
        <section className="w-full text-center mb-6 text-[#2d3748]">
            <h1 className="text-[28px] font-bold tracking-tight text-[#2b3649]">
                Charles Bloomberg
            </h1>

            <div className="mt-2 flex items-center justify-center gap-x-5 text-[13px] text-[#526071]">
                <span className="flex items-center gap-1">
                    <MapPin size={13} color="#ffffff" className="fill-[#2b3649] shrink-0" />
                    <span>New York City, United States</span>
                </span>
                <span className="flex items-center gap-1">
                    <Mail size={13} color="#000" className="shrink-0" />
                    <span>charlesbloomberg@wisc.edu</span>
                </span>
                <span className="flex items-center gap-1">
                    <Smartphone size={13} className="text-[#2b3649] stroke-[2.5] shrink-0" />
                    <span>(621) 799-5548</span>
                </span>
                <span className="flex items-center gap-1">
                    <Linkedin size={13} className="fill-[#2b3649] text-[#2b3649] shrink-0" />
                    <span>in/bloomberg</span>
                </span>
            </div>

            <div className="h-px bg-gray-200 mt-2 mb-4"></div>
        </section>
    );
};

export default Header;
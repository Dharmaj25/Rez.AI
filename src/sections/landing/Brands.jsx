import googlePng from "../../assets/brands/google.png";
import msLogo from "../../assets/brands/microsoft.png";
import netflixLogo from "../../assets/brands/netflix.png";
import spotifyLogo from "../../assets/brands/spotify.png";
import atlassianLogo from "../../assets/brands/atlassian.png";
import metaLogo from "../../assets/brands/meta.png";
import deloitteLogo from "../../assets/brands/deloitte.png";
import stripeLogo from "../../assets/brands/stripe.png";
import samsungLogo from "../../assets/brands/samsung.png";
import twitchLogo from "../../assets/brands/twitch.png";

const logos = [
    googlePng,
    netflixLogo,
    spotifyLogo,
    atlassianLogo,
    metaLogo,
    deloitteLogo,
    stripeLogo,
    samsungLogo,
    twitchLogo,
];

const Brands = () => {
    return (
        <section className="py-16 animate-drop-custom my-24">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-700 mb-3">
                        Join thousands of candidates hired at
                    </h1>
                    <h1
                        className="text-5xl font-extrabold 
             bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 
             bg-clip-text text-transparent tracking-tight
             leading-[1.3]"
                    >
                        leading global brands
                    </h1>                </div>
                {/* Grid for logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 place-items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center group"
                        >
                            <img
                                src={logo}
                                alt="brand logo"
                                className="
                  h-16 sm:h-20 max-w-[150px] object-contain
                  grayscale transition duration-500 ease-out
                  group-hover:grayscale-0 group-hover:scale-110
                "
                            />
                            {/* Shine effect */}
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent
                           -translate-x-full group-hover:translate-x-full
                           transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Brands;

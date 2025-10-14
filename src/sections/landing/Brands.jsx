import { motion } from "framer-motion";

import googlePng from "../../assets/brands/google.png";
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

const textVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const Brands = () => {
  return (
    <section className="lg:py-16 animate-drop-custom my-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headings */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          className="mb-12 text-center pb-1"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-700 mb-3 leading-[1.25]">
            Join thousands of candidates hired at
          </h1>
          <h1
            className="text-4xl lg:text-5xl font-extrabold 
            bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 
            bg-clip-text text-transparent tracking-tight leading-[1.25] overflow-visible lg:leading-[1.5]"
          >
            leading global brands
          </h1>
        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 place-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
              className="relative flex items-center justify-center group"
            >
              <img
                src={logo}
                alt="brand logo"
                className="
                  h-10 sm:h-20 max-w-[150px] object-contain
                  grayscale transition duration-500 ease-out
                  group-hover:grayscale-0 group-hover:scale-110
                "
              />
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent
                           -translate-x-full group-hover:translate-x-full
                           transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

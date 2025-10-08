import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, LayoutTemplate, Palette } from "lucide-react";
import { useState, useRef } from "react";

//Resume Image Imports:
//Modern Resumes:
import ModernResume1 from "../../assets/resumes/modern/res4.png"
import ModernResume2 from "../../assets/resumes/modern/res2.png"
import ModernResume3 from "../../assets/resumes/modern/res3.png"
import ModernResume4 from "../../assets/resumes/modern/res5.jpg"
import ModernResume5 from "../../assets/resumes/modern/res1.png"

//Creative Resumes:
import CreativeResume1 from "../../assets/resumes/creative/res3.png"
import CreativeResume2 from "../../assets/resumes/creative/res4.png"
import CreativeResume3 from "../../assets/resumes/creative/res5.png"
import CreativeResume4 from "../../assets/resumes/creative/res1.png"
import CreativeResume5 from "../../assets/resumes/creative/res2.png"

//Professional Resumes:
import ProfessionalResume1 from "../../assets/resumes/professional/res1.png";
import ProfessionalResume2 from "../../assets/resumes/professional/res2.png";
import ProfessionalResume3 from "../../assets/resumes/professional/res3.png";
import ProfessionalResume4 from "../../assets/resumes/professional/res4.png";
import ProfessionalResume5 from "../../assets/resumes/professional/res5.png";

//Minimal Resumes:
import MinimalResume1 from "../../assets/resumes/minimal/res1.png";
import MinimalResume2 from "../../assets/resumes/minimal/res2.png";
import MinimalResume3 from "../../assets/resumes/minimal/res3.png";
import MinimalResume4 from "../../assets/resumes/minimal/res4.png";
import MinimalResume5 from "../../assets/resumes/minimal/res5.png";

//Elegant Resumes:
import ElegantResume1 from "../../assets/resumes/elegant/res1.png";
import ElegantResume2 from "../../assets/resumes/elegant/res2.png";
import ElegantResume3 from "../../assets/resumes/elegant/res3.png";
import ElegantResume4 from "../../assets/resumes/elegant/res4.png";
import ElegantResume5 from "../../assets/resumes/elegant/res5.png";


//Simple Resumes:
import SimpleResume1 from "../../assets/resumes/simple/res1.png";
import SimpleResume2 from "../../assets/resumes/simple/res2.png";
import SimpleResume3 from "../../assets/resumes/simple/res3.png";
import SimpleResume4 from "../../assets/resumes/simple/res4.jpg";
import SimpleResume5 from "../../assets/resumes/simple/res5.png";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Showcase = () => {
    const [activeTemplateType, setActiveTemplateType] = useState("Modern");
    const [resumes, setResumes] = useState([ModernResume1, ModernResume2, ModernResume3, ModernResume4, ModernResume5]);
    const swiperRef = useRef(null);

    const templateTypes = ["Modern", "Creative", "Professional", "Minimal", "Elegant", "Simple", "View More"];

    const handleTemplateTypeChange = (type) => {
        let tempArray = [];
        switch (type) {
            case "Modern":
                tempArray = [ModernResume1, ModernResume2, ModernResume3, ModernResume4, ModernResume5]
                break;
            case "Creative":
                tempArray = [CreativeResume1, CreativeResume2, CreativeResume3, CreativeResume4, CreativeResume5];
                break;
            case "Professional":
                tempArray = [ProfessionalResume1, ProfessionalResume2, ProfessionalResume3, ProfessionalResume4, ProfessionalResume5];
                break;
            case "Minimal":
                tempArray = [MinimalResume1, MinimalResume2, MinimalResume3, MinimalResume4, MinimalResume5];
                break;
            case "Elegant":
                tempArray = [ElegantResume1, ElegantResume2, ElegantResume3, ElegantResume4, ElegantResume5];
                break;
            case "Simple":
                tempArray = [SimpleResume1, SimpleResume2, SimpleResume3, SimpleResume4, SimpleResume5];
                break;
            default:
                break;
        }
        setResumes(tempArray)
        setActiveTemplateType(type);
    };

    return (
        <div className="text-center my-20 bg-stone-100/70 py-14">
            {/* Top Label */}
            <div className="inline-block bg-blue-100/30 border-2 border-blue-400 rounded-full px-6 py-2 mb-16 shadow-2xl">
                <div className="flex items-center gap-2 justify-center">
                    <LayoutTemplate className="w-4 h-4 text-blue-500" />
                    <span className="uppercase text-blue-500 font-bold text-sm tracking-wide">
                        50+ Professional Resume Templates
                    </span>
                </div>
            </div>

            {/* Headings */}
            <div className="text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-700 mb-2">
                    Showcase Your Skills With
                </h1>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-500 mb-10 flex items-center justify-center gap-3">
                    Stunning Templates
                    <Palette strokeWidth={2.5} className="w-12 mx-1 h-12 text-blue-500 font-extrabold" />
                </h1>

                {/* Description */}
                <div className="mb-14 mx-auto">
                    <p className="text-2xl text-gray-600/75 font-bold">
                        Choose from sleek, ATS-friendly designs that highlight your strengths
                        and catch recruiter attention instantly.
                    </p>
                    <p className="text-2xl text-blue-500 font-bold mt-1 leading-relaxed">
                        Modern layouts. Easy customization. Professional impact.
                    </p>
                </div>
            </div>

            {/* Buttons Grid */}
            <div className="flex flex-wrap justify-center gap-4 mt-16">
                {templateTypes.map((label, idx) => (
                    <Button
                        key={idx}
                        className={`
                            border-2 border-blue-500 rounded-3xl py-5 px-8 text-md font-medium transition-all duration-300
                            ${activeTemplateType === label
                                ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-[0_6px_20px_rgba(59,130,246,0.5)] translate-y-[-3px]"
                                : "text-blue-500 bg-white hover:text-white hover:bg-gradient-to-r hover:from-blue-500/80 hover:via-blue-600/80 hover:to-blue-700/80 hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)] hover:translate-y-[-3px]"
                            }
                        `}
                        onClick={() => handleTemplateTypeChange(label)}
                    >
                        {label}
                        {label.trim().toLowerCase() === "view more" && (
                            <ArrowRight className="ml-1 w-4 h-4" />
                        )}
                    </Button>
                ))}
            </div>

            {/* Swiper Section */}
            <div className="mx-auto px-6 mt-16 relative">
                <Swiper
                    effect="coverflow"
                    grabCursor={false}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={0}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay]}
                    style={{ paddingBottom: "50px" }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 1.5, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >
                    {resumes.map((resumeImage, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center">
                            <div
                                className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]
  flex flex-col items-center justify-center text-2xl font-bold text-blue-600
  transition-transform duration-300 border border-gray-100 overflow-hidden
  hover:scale-[1.03]"
                                style={{ height: "600px", }}
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                {/* Resume Image */}
                                <img
                                    src={resumeImage}
                                    alt={`Template ${idx + 1}`}
                                    className="h-full w-full object-contain bg-white p-4"
                                />

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-all duration-300 ease-in-out
    hover:bg-gray-500/30 hover:opacity-100 flex items-center justify-center"
                                >
                                    <Button
                                        className="px-6 py-5 rounded-lg bg-blue-500
      text-white font-semibold shadow-lg transform transition-all duration-300 text-sm
       hover:shadow-[0_6px_30px_rgba(59,130,246,1.0)] hover:bg-blue-600"
                                    >
                                        <div className="flex gap-2">
                                            <span>Try this template </span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-8">
                    <button className="swiper-button-prev-custom bg-white text-blue-500 border-2 border-blue-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition">
                        <ChevronLeft />
                    </button>

                    <button className="swiper-button-next-custom bg-white text-blue-500 border-2 border-blue-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
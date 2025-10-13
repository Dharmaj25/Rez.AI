import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

// Avatar Image Imports
import Face1 from "../../assets/avatars/face1.jpg";
import Face2 from "../../assets/avatars/face2.jpg";
import Face3 from "../../assets/avatars/face3.jpg";
import Face4 from "../../assets/avatars/face4.jpg";
import Face5 from "../../assets/avatars/face5.jpg";
import Face6 from "../../assets/avatars/face6.jpg";
import Face7 from "../../assets/avatars/face7.jpg";
import Face8 from "../../assets/avatars/face8.jpg";
import Face9 from "../../assets/avatars/face9.jpg";
import Face10 from "../../assets/avatars/face10.jpg";
import Face11 from "../../assets/avatars/face11.jpg";
import Face12 from "../../assets/avatars/face12.jpg";
import Face13 from "../../assets/avatars/face13.jpg";
import Face14 from "../../assets/avatars/face14.jpg";
import Face15 from "../../assets/avatars/face15.jpg";
import Face16 from "../../assets/avatars/face16.jpg";
import Face17 from "../../assets/avatars/face17.jpg";
import Face18 from "../../assets/avatars/face18.jpg";
import Face19 from "../../assets/avatars/face19.jpg";
import Face20 from "../../assets/avatars/face20.jpg";
import Face21 from "../../assets/avatars/face21.jpg";
import Face23 from "../../assets/avatars/face23.jpg";

const testimonials = [
  {
    name: "Mark Smith",
    avatar: Face1,
    message:
      "Rez.AI helped me launch my portfolio in a single day. It’s sleek, modern, and perfectly ATS-ready — I landed two interviews within a week!",
    designation: "Frontend Developer, TechMahindra",
  },
  {
    name: "Lisa Diaz",
    avatar: Face2,
    message:
      "The design templates are absolutely stunning. It gave my portfolio a professional edge without spending hours designing manually.",
    designation: "UI/UX Designer, Cognizant",
  },
  {
    name: "Michel Rayer",
    avatar: Face3,
    message:
      "I used Rez.AI to build a creative portfolio for my freelance projects. My clients now get impressed even before I pitch!",
    designation: "Freelance Graphic Designer",
  },
  {
    name: "Max Holloway",
    avatar: Face4,
    message:
      "It’s intuitive, fast, and well thought-out. Rez.AI made building my portfolio as easy as dragging and dropping sections.",
    designation: "Full Stack Developer, Infosys",
  },
  {
    name: "Sofia Fernandes",
    avatar: Face5,
    message:
      "The templates reflect personality and clarity. My recruiter literally complimented my resume design during the interview.",
    designation: "Marketing Specialist, Unilever",
  },
  {
    name: "Jason Paul",
    avatar: Face6,
    message:
      "From the moment I saw the preview feature, I knew this tool was built by people who truly understand developers.",
    designation: "Software Engineer, Accenture",
  },
  {
    name: "Gervonta Davis",
    avatar: Face7,
    message:
      "Rez.AI made me fall in love with minimal portfolio designs. Everything feels premium yet simple to edit.",
    designation: "Product Designer, Adobe",
  },
  {
    name: "Khabib Nurmagomedov",
    avatar: Face8,
    message:
      "I’ve tried multiple tools, but none match Rez.AI’s polish and usability. It’s become my go-to for all professional resumes.",
    designation: "Recruiter, TCS",
  },
  {
    name: "Emily Zhang",
    avatar: Face9,
    message:
      "The templates adapt beautifully to any content I add — from dev work to creative writing. Truly versatile.",
    designation: "Content Strategist, HubSpot",
  },
  {
    name: "Nina Marie Daniel",
    avatar: Face10,
    message:
      "The simplicity and quality blew me away. My portfolio went live within hours, and it’s already making a difference.",
    designation: "Software Developer, Zoho",
  },
  {
    name: "Emily Rose",
    avatar: Face11,
    message:
      "A perfect balance of design and usability. Rez.AI helped me stand out in a crowd of generic resumes.",
    designation: "UX Researcher, Swiggy",
  },
];

const testimonial2 =
  [
    {
      name: "Jason Derulo",
      avatar: Face12,
      message:
        "Rez.AI helped me launch my portfolio in a single day. It’s sleek, modern, and perfectly ATS-ready — I landed two interviews within a week!",
      designation: "Frontend Developer, TechMahindra",
    },
    {
      name: "Anna Griffinson",
      avatar: Face13,
      message:
        "The design templates are absolutely stunning. It gave my portfolio a professional edge without spending hours designing manually.",
      designation: "UI/UX Designer, Cognizant",
    },
    {
      name: "Sergi Alvarez",
      avatar: Face14,
      message:
        "I used Rez.AI to build a creative portfolio for my freelance projects. My clients now get impressed even before I pitch!",
      designation: "Freelance Graphic Designer",
    },
    {
      name: "Tasha Gimbert",
      avatar: Face15,
      message:
        "It’s intuitive, fast, and well thought-out. Rez.AI made building my portfolio as easy as dragging and dropping sections.",
      designation: "Full Stack Developer, Infosys",
    },
    {
      name: "Jose Aldo",
      avatar: Face16,
      message:
        "The templates reflect personality and clarity. My recruiter literally complimented my resume design during the interview.",
      designation: "Marketing Specialist, Unilever",
    },
    {
      name: "Nick James",
      avatar: Face17,
      message:
        "From the moment I saw the preview feature, I knew this tool was built by people who truly understand developers.",
      designation: "Software Engineer, Accenture",
    },
    {
      name: "Dana White",
      avatar: Face18,
      message:
        "Rez.AI made me fall in love with minimal portfolio designs. Everything feels premium yet simple to edit.",
      designation: "Product Designer, Adobe",
    },
    {
      name: "Kamaru Usman",
      avatar: Face19,
      message:
        "I’ve tried multiple tools, but none match Rez.AI’s polish and usability. It’s become my go-to for all professional resumes.",
      designation: "Recruiter, TCS",
    },
    {
      name: "Dustin Poerier",
      avatar: Face20,
      message:
        "The templates adapt beautifully to any content I add — from dev work to creative writing. Truly versatile.",
      designation: "Content Strategist, HubSpot",
    },
    {
      name: "Xhang Weili",
      avatar: Face21,
      message:
        "The simplicity and quality blew me away. My portfolio went live within hours, and it’s already making a difference.",
      designation: "Software Developer, Zoho",
    },
    {
      name: "Ronda Rousey",
      avatar: Face23,
      message:
        "A perfect balance of design and usability. Rez.AI helped me stand out in a crowd of generic resumes.",
      designation: "UX Researcher, Swiggy",
    },
  ];


// ✅ Testimonials Section
const Testimonials = () => {
  return (
    <div className="my-28">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start px-10 sm:px-20 lg:px-24">
        {/* Left Section */}
        <div className="relative">
          <h1
            className="text-4xl sm:text-7xl font-extrabold text-gray-900 mb-5 text-center lg:text-left"
          >
            Trusted by
            <br />
            <span className="text-blue-500">creators, developers</span>
            <br /> & designers
          </h1>

          <p
            className="text-lg sm:text-2xl text-gray-800/80 mt-6 text-center lg:text-left lg:max-w-[80%] "
          >
            Professionals across the globe are crafting stunning portfolios and
            landing dream opportunities with{" "}
            <span className="text-blue-500 font-semibold">Rez.AI</span>. Built
            for performance, design, and simplicity.
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
            <Stat value="89%" label="built a portfolio within 1 day" />
            <Stat value="75%" label="got more recruiter visits per week" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
            <Stat value="48+" label="hours saved in resume building" />
            <Stat value="4.9★" label="average user satisfaction" />
          </div>
        </div>
      </div>

      {/* Testimonials Scroller */}
      <div className="overflow-hidden py-14 mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="flex whitespace-nowrap relative">
          <div className="flex animate-slide gap-10">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="flex whitespace-nowrap relative mt-5">
          <div className="flex animate-slide-reverse gap-10">
            {testimonial2.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
            {testimonial2.map((t, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const TestimonialCard = ({ testimonial }) => {
  const { name, message, designation, avatar } = testimonial;

  return (
    <div
      className="relative rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      border border-gray-100/70 px-10 py-12 w-[360px] flex flex-col justify-between
      hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] transition-all duration-300"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 left-6 text-blue-400 w-8 h-8" />

      {/* Message */}
      <p className="mt-10 mb-8 text-gray-700 text-[1.05rem] leading-relaxed italic" style={{ whiteSpace: "normal" }}>
        “{message}”
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-11 w-11">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-900 text-lg">{name}</p>
          <p className="text-gray-600 text-sm">{designation}</p>
        </div>
      </div>

      {/* Subtle Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-b-xl" />
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center lg:items-start w-64">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-500 leading-none">
      {value}
    </h1>
    <h4 className="mt-3 text-md md:text-lg font-semibold text-gray-700 whitespace-nowrap">
      {label}
    </h4>
  </div>
);

export default Testimonials;

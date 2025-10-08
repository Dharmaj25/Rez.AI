import { Quote } from "lucide-react";

const TestimonialCard = (message,avatar,name,designation) => {
  return (
    <div className="h-96 bg-stone-200 rounded-xl shadow-xl">
      <Quote fill="blue" className="h-14 w-14"/>
      <h4 className="my-14">{message}</h4>
    </div>
  )
} 

const Testimonials = () => {
  const logos = [];

  return (
    <div className="my-28 ">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-10 sm:px-20 lg:px-24">
        {/* Left Section */}
        <div className="relative">
          <div className="leading-tight">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-5 " style={{ lineHeight: "5.2rem" }}>
              Trusted by
              <br />
              <span className="text-blue-500">creators, developers</span>
              <br />
              & designers
            </h1>

            <p
              className=" text-xl sm:text-2xl text-gray-800/80 mt-6"
              style={{ maxWidth: "80%" }}
            >
              Professionals across the globe are crafting stunning portfolios
              and landing dream opportunities with{" "}
              <span className="text-blue-500 font-semibold">Rez.AI</span>.
              Empowering creative minds to stand out with design, clarity, and
              confidence.
            </p>
          </div>
        </div>

        {/* Right Section  */}
        <div className="flex flex-col gap-16">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-24">
            <div className="flex flex-col items-start w-64">
              <h1 className="text-7xl font-extrabold text-blue-500 leading-none">
                89%
              </h1>
              <h4 className="mt-3 text-lg font-semibold text-gray-700 whitespace-nowrap">
                built a portfolio within 1 day
              </h4>
            </div>

            <div className="flex flex-col items-start w-64">
              <h1 className="text-7xl font-extrabold text-blue-500 leading-none">
                75%
              </h1>
              <h4 className="mt-3 text-lg font-semibold text-gray-700 whitespace-nowrap">
                got more recruiter visits per week
              </h4>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-24">
            <div className="flex flex-col items-start w-64">
              <h1 className="text-7xl font-extrabold text-blue-500 leading-none">
                48+
              </h1>
              <h4 className="mt-3 text-lg font-semibold text-gray-700 whitespace-nowrap">
                hours saved in resume building
              </h4>
            </div>

            <div className="flex flex-col items-start w-64">
              <h1 className="text-7xl font-extrabold text-blue-500 leading-none">
                4.9
              </h1>
              <h4 className="mt-3 text-lg font-semibold text-gray-700 whitespace-nowrap">
                average user satisfaction
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-stone-100/60 py-10 my-16">
        <div className="flex whitespace-nowrap relative">
          {/* Actual track (doubled for infinite effect) */}
          <div className="flex animate-slide">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="mx-10 flex-shrink-0">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;

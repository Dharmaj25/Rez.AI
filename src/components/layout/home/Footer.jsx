const HomeFooter = () => {
  const footerData = [
    {
      title: "Platform",
      menu: [
        { text: "About Us", url: "#" },
        { text: "Features", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      menu: [
        { text: "Blog", url: "#" },
        { text: "Tools", url: "#" },
        { text: "Newsletter", url: "#" },
        { text: "FAQs", url: "#" },
      ],
    },
    {
      title: "Products",
      menu: [
        { text: "AI Resume Builder", url: "#" },
        { text: "Portfolio Creator", url: "#" },
        { text: "Resume Templates", url: "#" },
        { text: "Custom Branding", url: "#" },
      ],
    },
    {
      title: "Company",
      menu: [
        { text: "Careers", url: "#" },
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Support", url: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-14 border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-10">
        {/* Brand Section */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Rez.<span className="text-blue-500">AI</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed mx-auto sm:mx-0">
            Empowering developers to build stunning, AI-driven resumes and portfolios that truly stand out.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-10 flex-[2] text-sm">
          {footerData.map((section, index) => (
            <div
              key={index}
              className={
                section.title === "Products" ? "hidden lg:block" : ""
              }
            >
              <h4 className="uppercase text-gray-500 dark:text-gray-400 font-semibold tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.menu.map((item, i) => (
                  <li
                    key={i}
                    className="transition-all duration-200 hover:translate-x-2"
                  >
                    <a
                      href={item.url}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="max-w-6xl mx-auto my-10 border-gray-200 dark:border-gray-800" />

      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Rez.AI — All rights reserved.
      </p>
    </footer>
  );
};

export default HomeFooter;

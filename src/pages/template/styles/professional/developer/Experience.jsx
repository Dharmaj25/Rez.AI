const Experience = () => {
    const experience = [
        {
            role: "Software Engineer",
            organization: {
                name: "Zenith Cloud Systems",
                city: "",
                state: "",
                country: "",
            },
            start_date: "Jul 2023",
            end_date: "Present",
            responsibilities: [
                "Redesigned the core REST API and WebSocket layer for the order-tracking platform, reducing average response time by 38%.",
                "Built a real-time event pipeline using Python and Kafka to process telemetry from over 50,000 connected IoT devices.",
                "Developed microservices with Java and Spring Boot to manage subscription billing, improving system reliability and uptime.",
                "Configured AWS load balancers and auto-scaling groups, cutting peak-hour service failures by 22%.",
            ],
        },
        {
            role: "Software Engineer Intern",
            organization: {
                name: "Bluewave Technologies",
                city: "",
                state: "",
                country: "",
            },
            start_date: "Jan 2023",
            end_date: "Jun 2023",
            responsibilities: [
                "Built a customer support chatbot using Python and the WhatsApp Business API to automate order status queries.",
                "Developed an internal inventory dashboard using React and Node.js to track warehouse stock levels.",
                "Gained hands-on exposure to Docker, CI/CD pipelines, and Linux server administration.",
            ],
        },
        {
            role: "Web Development Trainee",
            organization: {
                name: "Codeway Labs",
                city: "",
                state: "",
                country: "",
            },
            start_date: "Jun 2022",
            end_date: "Dec 2022",
            responsibilities: [
                "Assisted in building responsive front-end pages using HTML, CSS, and JavaScript for client websites.",
                "Wrote unit tests and fixed bugs reported during QA cycles, improving overall code coverage.",
                "Collaborated with senior engineers in daily stand-ups following Agile/Scrum practices.",
            ],
        },
    ];

    return (
        <section className="mb-10">
            <h3 className="text-[20px] leading-none font-bold uppercase text-slate-700">
                Professional Experience
            </h3>

            <div className="mt-5 space-y-6">
                {experience.map((exp, index) => (
                    <div key={index}>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[20px] leading-[1.2] font-bold text-slate-700">
                                    {exp.role}
                                </p>

                                <p className="mt-1 text-[15px] leading-[1.4] text-gray-900">
                                    {exp.organization.name}
                                </p>
                            </div>

                            <p className="shrink-0 text-[15px] leading-[1.4] text-gray-900">
                                ({exp.start_date} - {exp.end_date})
                            </p>
                        </div>

                        <ul className="mt-4 list-disc pl-5 space-y-3">
                            {exp.responsibilities.map((resp, index) => (
                                <li
                                    key={index}
                                    className="text-[15px] leading-[1.45] text-gray-900"
                                >
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
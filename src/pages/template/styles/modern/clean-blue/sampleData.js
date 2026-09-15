export const demoData = {
    personal: {
        first_name: "Matthew",
        last_name: "Collins",
        phone: {
            code: "123",
            number: "4567890"
        },
        email: "mathewcollins@gmail.com",
        city: "New York City",
        state: "New York",
        country: "USA"
    },
    professional: {
        current_role: "Junior software developer",
        summary: "Solutions-oriented computer science graduate with hands-on experience in full-stack development, object-oriented programming, and agile methodologies. Passionate about writing clean, maintainable code and collaborating with cross-functional teams to build scalable user applications.",
        education: [
            {
                title: "Bachelor of Science in Computer Science",
                organization: {
                    name: "Southeast University",
                    city: "New York City",
                    state: "New York",
                    country: "USA"
                },
                start_date: "",
                end_date: "May 2026"
            },
        ],
        skills: [
            "Object-Oriented Programming",
            "Database Architecture",
            "API Imntegration",
            "UI/UX Principles",
            "Agile/Scrum Methodologies"
        ],
        experience: [
            {
                title: "Software Engineering Intern",
                organization: {
                    name: "Circuit Systems",
                    city: "New York City",
                    state: "NY",
                    country: "USA"
                },
                start_date: "June 2025",
                end_date: "August 2025",
                responsibilities: [
                    "Developed and tested new features for the internal client dashboard using an object-oriented programming language, improving load times by 15%.",
                    "Participated in daily agile stand-ups and collaborated with senior developers to resolve software bugs reported in the central ticketing system."
                ]
            }
        ],
        certification: [
            {
                title: "Advanced Full-Stack Development Certificate",
                organization: {
                    name: "Southeast University",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "",
                end_date: "June 2025"
            },
            {
                title: "Secure Code Fundamentals",
                organization: {
                    name: "Streamline Soft",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "",
                end_date: "April 2025"
            },
        ]
    }
};

export const visibleSections = ["header", "summary", "education", "skills", "experience", "certification"]; 
export const demoData = {
    personal: {
        first_name: "Connor",
        last_name: "Hamilton",
        phone: {
            code: "261",
            number: "123-456-789"
        },
        email: "connorhammilton@dev.mail",
    },
    professional: {
        github: "github.com/connorhamilton",
        linkedin: "linkedin.com/connorhamilton",
        current_role: "Full Stack Developer",
        summary: "Passionate Full Stack Developer with 3+ years of experience building scalable and user-friendly web applications. Skilled in JavaScript, React, Node.js, and databases. Strong problem-solving abilities and a keen eye for clean, efficient code. Always eager to learn new technologies and contribute to impactful products.",
        education: [
            {
                title: "B.S. in Computer Science",
                organization: {
                    name: "State University",
                    city: "Boston",
                    state: "MA",
                    country: "USA"
                },
                start_data: "Sep 2020",
                end_date: "May 2024",
            },
        ],
        skills: [
            {
                title: "JavaScript (ES6+)",
                type: "Technical Skills",
            },
            {
                title: "React.js, Next.js",
                type: "Technical Skills"
            },
            {
                title: "Node.js, Express.js",
                type: "Technical Skills"
            },
            {
                title: "HTML5, CSS3, Tailwind CSS",
                type: "Technical Skills"
            },
            {
                title: "MongoDB, PostgreSQL",
                type: "Technical Skills"
            },
            {
                title: "Git, Github",
                type: "Technical Skill"
            },
            {
                title: "RESTful APIs, JWT, GraphQL",
                type: "Technical Skills"
            },
            {
                title: "VS Code",
                type: "Tools"
            },
            {
                title: "Postman",
                type: "Tools"
            },
            {
                title: "Docker",
                type: "Tools"
            },
            {
                title: "Figma",
                type: "Tools"
            },
            {
                title: "Vercel, Netlify",
                type: "Tools"
            }
        ],
        certification: [
            "Meta Front-End Developer Professional Certificate",
            "JavaScript Algorithms and Data Structures - freeCodeCamp"
        ],
        experience: [
            {
                title: "Full Stack Developer",
                organization: {
                    name: "TechNova Solutions",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "Jan 2024",
                end_date: "Present",
                responsibilites: [
                    "Developed and maintained responsive web applications using React.js, Node.js, and MongoDB",
                    "Built RESTful APIs and integrated third-party services for seamless application functionality",
                    "Optimized application performance, resulting in a 25% improvement in load time",
                    "Collaborated with cross-functional teams using Agile methodology."
                ]
            },
            {
                title: "Software Developer",
                organization: {
                    name: "CodeCraft Inc.",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "Jun 2022",
                end_date: "Jan 2024",
                responsibilites: [
                    "Developed and maintained backend services using Node.js and Express.js.",
                    "Designed and implemented MongoDB schemas and SQL queries.",
                    "Built reusable frontend components with React.js and Tailwind CSS.",
                    "Integrated payment gateways and authentication using JWT."
                ]
            },
            {
                title: "Junior Developer",
                organization: {
                    name: "WebWorks Studio",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "Jan 2021",
                end_date: "Jun 2022",
                responsibilites: [
                    "Assisted in building and testing web applications.",
                    "Fixed bugs and improved application performance.",
                    "Worked on UI improvements and responsive design.",
                    "Gained hands-on experience in Git, CI/CD, and deployment."
                ]
            }
        ],
        projects: [
            {
                title: "TaskFlow - Project Management Tool",
                desctiption: ["A full stack project management tool with task tracking, team collaboration, and real-time updates."],
                tech_stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
                key_features: ["User authentication", "real-time notification", "task management", "file uploads"]
            },
            {
                title: "DevBlog - Developer Blogging Platform",
                description: ["A blogging platform for developers to create, read, and share technical articles"],
                tech_stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
                key_features: ["Markdown editor", "Category filters", "Search", "User profiles", "Comments"]

            }
        ]
    }
};

export const visibleSections = ["header", "experience", "projects", "contact", "education", "skills", "certification"];
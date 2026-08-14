export const demoData = {
    personal: {
        first_name: "Arjun",
        last_name: "Mehta",
        email: "arjun.mehta.dev@gmail.com",
        phone: {
            code: "91",
            number: "9876543210"
        },
        city: "",
        state: "",
        country: ""
    },
    professional: {
        current_role: "Software Engineer",
        experience: [
            {
                role: "Software Engineer",
                organization: {
                    name: "Zenith Cloud Systems",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "Jul 2023",
                end_date: "Present",
                responsibilities: [
                    "Redesigned the core REST API and WebSocket layer for the order-tracking platform, reducing average response time by 38%.",
                    "Built a real-time event pipeline using Python and Kafka to process telemetry from over 50,000 connected IoT devices.",
                    "Developed microservices with Java and Spring Boot to manage subscription billing, improving system reliability and uptime.",
                    "Configured AWS load balancers and auto-scaling groups, cutting peak-hour service failures by 22%."
                ]
            },
            {
                role: "Software Engineer Intern",
                organization: {
                    name: "Bluewave Technologies",
                    city: "",
                    state: "",
                    country: ""
                },
                start_date: "Jan 2023",
                end_date: "Jun 2023",
                responsibilities: [
                    "Built a customer support chatbot using Python and the WhatsApp Business API to automate order status queries.",
                    "Developed an internal inventory dashboard using React and Node.js to track warehouse stock levels.",
                    "Gained hands-on exposure to Docker, CI/CD pipelines, and Linux server administration.",
                ]
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
        ],
        skills: [
            {
                name: "Java",
                percentage: "80"
            },
            {
                name: "Spring Boot",
                percentage: "70"
            },
            {
                name: "SQL",
                percentage: "90"
            },
            {
                name: "Python",
                percentage: "50"
            },
            {
                name: "Django",
                percentage: "30"
            },
            {
                name: "React",
                percentage: "95"
            },
            {
                name: "AWS",
                percentage: "60"
            },
            {
                name: "Javascript",
                percentage: "90"
            },
            {
                name: "REST",
                percentage: "70"
            },
            {
                name: "Docker",
                percentage: "80"
            },
            {
                name: "Kafka",
                percentage: "80"
            },
            {
                name: "Git",
                percentage: "100"
            }
        ],
        projects: [
            {
                name: "Campus Resource Portal",
                description: [
                    "Web platform for students and faculty to book labs, equipment, and study rooms in real time."
                ]
            },
            {
                name: "DevSearch - Search Engine for Developers",
                desscription: [
                    "Custom search engine that indexes documentation and Stack Overflow threads to answer programming queries.",
                ]
            },
            {
                name: "CodeMate - AI Chatbot for Devs",
                description: [
                    "AI coding assistant built with AWS Bedrock and Python to answer programming-related questions.",
                ]
            }
        ],
        certifications: [
            {
                name: "AWS Cettified Solutions Architect"
            },
            {
                name: "Java Spring Boot Developer Certification"
            },
            {
                name: "Python for DAta Structures Coursera"
            }
        ],
        achievements: [
            "Winner, Smart India Hackathon (2021) — Built a real-time flood-prediction dashboard among 200+ teams.",
            "Best Intern Award, Bluewave Technologies (2023).",
            "Published Technical Article on microservices scaling, featured on Dev.to (10K+ reads).",
        ]
    },
    career_target: {
        target_role: "",
        pitch: "Full-Stack Software Developer with 3+ years of experience working in fast-paced, agile environments. Skilled in building scalable web applications and backend systems using Java, Python, and JavaScript, with hands-on experience deploying cloud-native services on AWS.",
    }
}

const visibleSections = ["header", "summary", "education", "experience", "skills", "projects", "certifications", "achievements"]
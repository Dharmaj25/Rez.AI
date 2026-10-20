export const demoData = {
    personal: {
        first_name: "Johnathan",
        last_name: "Alexander Carillo",
        city: "Austin",
        state: "Texas",
        country: "USA",
        phone: {
            code: "1",
            number: "123-456-789"
        },
        email: "johnathan@example.com" 
    },
    professional : {
        current_role: "Operations Manager",
        summary: "I am experience manager who enjoys tackling big challenges in fulfillment, manufacturing and customer service. I take pride in my ability to build high performing and engaged teams with a passion to win. Manufacturing & logistics are in my blood. For almost a decade I have been at the forefront of many manufacturing transformations as an ambitious operations leader, Lean Six Sigma strategist and functional operator.",
        languages: [ {
            title : "Spanish",
            proficiency: "Native"
        },
        {
            title: "English",
            proficiency: "Fluent"
        },
        {
            title: "Italian",
            proficiency: "Intermediate"
        }
    ],
    achievement: [
        {
            title: "33% YoY improvement in department productivity",
            description: "Implemented Lean Six Sigma methodologies to streamline processes and eliminate waste, resulting in a 33% YoY improvement in department productivity."
        },
        {
            title: "Record high department quality benchmark",
            description: "Implemented a comprehensive quality management system, resulting in a record high department quality benchmark and a 25% reduction in defects."
        },
    ],
    projects: [
        {
            title: "Supply Chain Optimization Project",
            description: "Led a cross-functional team to optimize the supply chain, resulting in a 20% reduction in lead time and a 15% reduction in costs."
        },
        {
            title: "Customer Service Excellence Initiative",
            description: "Implemented a customer service excellence initiative, resulting in a 30% increase in customer satisfaction scores and a 10% increase in repeat business."
        }
    ] 
    }
};

export const visibleSections = ["header", "summary", "experience", "languages", "achievement", "projects"];
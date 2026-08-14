export const demoData = {
    personal: {
        first_name: "Michael",
        last_name: "Harris",
        phone: {
            country_code: "+61",
            number: "412 345 678"
        },
        email: "michael.harris@gmail.com",
        city: "Sydney",
        country: "Australia",
        state: "New South Wales",
    },
    professional: {
        current_role: "Digital Marketing Executive",
        linkedin_profile: "https://linkedin.com/michaelharris",
        experience: [
            {
                role: "Marketing Manager",
                organization: {
                    name: "XYZ Corporation",
                    city: "Sydney",
                    state: "NSW",
                    country: "Australia"
                },
                start_date: "January 2022",
                end_date: "Present",
                responsibilities: [
                    "Lead a team of 5 in creating and executing digital marketing strategies across multiple platforms, including social media, SEO, and email campaigns",
                    "Achieved a 35% increase in website traffic and 50% boost in social media engagement within the first year.",
                    "Managed a marketing budget of $200,000, ensuring maximum ROI through cost-effective advertising strategies"
                ]

            },
            {
                role: "Digital Marketing Specialist",
                organization: {
                    name: "ABC Solutions",
                    city: "Melbourne",
                    state: "VIC",
                    country: "Australia"
                },
                start_date: "June 2018",
                end_date: "December 2021",
                responsibilities: [
                    "Developed and executed SEO and SEM strategies that increased organic search traffic by 25 %",
                    "Created and managed Google Ads and Facebook Ads campaigns, resulting in a 20% increase in qualified leads.",
                    "Produced engaging content for blogs, newsletters, and social media platforms to attract target audiences"
                ]
            }
        ],
        education: [
            {
                title: "Master of Digital Marketing",
                organization: {
                    name: "University of New South Wales",
                    city: "Sydney",
                    state: "NSW",
                    country: "Australia"
                },
                start_date: "February 2019",
                end_date: "November 2020"
            },
            {
                title: "Bachelor of Marketing",
                organization: {
                    name: "University of Sydney",
                    city: "Sydney",
                    state: "NSW",
                    country: "Australia"
                },
                start_date: "March 2014",
                end_date: "June 2018"
            }
        ],
        skills: [
            "Digital Marketing Strategy",
            "SEO & SEM",
            "Google Analytics",
            "SEMrush",
            "Social Media Marketing",
            "Content Creation & Copywriting",
            "Budget Management",
            "Data Analysis"
        ],
        certifications: [
            "Google Analytics Certified",
            "Facebook Blueprint Certification",
            "HubSpot Inbound Marketing Certification"
        ]
    },
    career_target: {
        target_role: "",
        pitch: "Results-oriented marketing professional with over 5 years of experience in digital marketing, brand strategy, and content creation. Proven ability to drive brand growth, increase online engagement, and deliver data-driven results. Expert in utilizing digital tools and analytics to optimize marketing campaigns and achieve business objectives"
    }
}

export const visibleSections = ["header", "summary", "experience", "education", "skills", "certifications"]
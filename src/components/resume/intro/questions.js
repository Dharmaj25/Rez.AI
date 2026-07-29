export const QUESTION_TYPES = {
    RADIO_CARDS: "radio_cards",
    BUTTON_GROUP: "button_group",
    TEXT_INPUT: "text_input",
    SEARCH_SELECT: "search_select",
    DROPDOWN: "dropdown",
};

export const questions = [
    {
        id: "current_status",
        title: "What best describes your current status?",
        description: "This helps us tailor the sections your resume actually needs.",
        type: QUESTION_TYPES.RADIO_CARDS,
        onboardingField: "professionalDetails.career_level",
        options: [
            { value: "student", label: "Student", description: "Still studying, exploring options" },
            { value: "fresh_graduate", label: "Fresh Graduate", description: "Recently completed my degree" },
            { value: "employed", label: "Employed", description: "Currently working, open to opportunities" },
            { value: "career_break", label: "Career Break", description: "Returning after a pause" },
            { value: "freelancer", label: "Freelancer", description: "Working independently" },
        ],
        validation: { required: true },
    },
    {
        id: "industry",
        title: "Which industry do you work in?",
        description: "We'll show you templates and language common in your field.",
        type: QUESTION_TYPES.SEARCH_SELECT,
        onboardingField: "professionalDetails.industry",
        options: [
            "Software & Technology",
            "Design & Creative",
            "Finance & Banking",
            "Healthcare",
            "Marketing & Sales",
            "Education",
            "Consulting",
            "Manufacturing",
            "Legal",
            "Other",
        ],
        validation: { required: true },
    },
    {
        id: "years_experience",
        title: "How many years of experience do you have?",
        description: null,
        type: QUESTION_TYPES.BUTTON_GROUP,
        onboardingField: "professionalDetails.total_experience",
        options: [
            { value: "0-1", label: "0–1 yrs" },
            { value: "1-3", label: "1–3 yrs" },
            { value: "3-6", label: "3–6 yrs" },
            { value: "6-10", label: "6–10 yrs" },
            { value: "10+", label: "10+ yrs" },
        ],
        validation: { required: true },
    },
    {
        id: "target_role",
        title: "What role are you aiming for?",
        description: "e.g. Senior Frontend Engineer, Product Designer, Data Analyst",
        type: QUESTION_TYPES.TEXT_INPUT,
        onboardingField: "careerTarget.target_role",
        placeholder: "Type your target role...",
        validation: { required: true, minLength: 2 },
    },
    {
        id: "resume_goal",
        title: "What's the primary goal for this resume?",
        description: null,
        type: QUESTION_TYPES.RADIO_CARDS,
        onboardingField: null,
        options: [
            { value: "job_search", label: "Job Search", description: "Actively applying to roles" },
            { value: "career_change", label: "Career Change", description: "Pivoting to a new field" },
            { value: "promotion", label: "Promotion", description: "Aiming for internal growth" },
            { value: "portfolio", label: "Portfolio", description: "Keeping it ready, not urgent" },
        ],
        validation: { required: true },
    },
];

export const getOnboardingValue = (user, path) => {
    if (!path || !user) return undefined;
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), user);
};
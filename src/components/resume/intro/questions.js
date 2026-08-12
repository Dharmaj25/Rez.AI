export const QUESTION_TYPES = {
    RADIO_CARDS: "radio_cards",
    BUTTON_GROUP: "button_group",
    TEXT_INPUT: "text_input",
    NUM_INPUT: "num_input",
    SEARCH_SELECT: "search_select",
    DROPDOWN: "dropdown",
    CHOICE_CARDS: "choice_cards"
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
        id: "target_role",
        title: "What role are you aiming for?",
        description: "e.g. Senior Frontend Engineer, Product Designer, Data Analyst",
        type: QUESTION_TYPES.TEXT_INPUT,
        onboardingField: "careerTarget.target_role",
        placeholder: "Type your target role...",
        validation: { required: true },
    },
    {
        id: "years_experience",
        title: "How many years of experience do you have?",
        description: null,
        type: QUESTION_TYPES.NUM_INPUT,
        onboardingField: "professionalDetails.total_experience",
        validation: { required: true, min: 0, max: 40 },
    },
    {
        id: "resume_goal",
        title: "What's the primary goal for this resume?",
        description: null,
        type: QUESTION_TYPES.RADIO_CARDS,
        onboardingField: null,
        options: [
            { value: "job_search", label: "Job Search", description: "Actively applying to new roles and opportunities" },
            { value: "career_change", label: "Career Change", description: "Pivoting your skills to enter a completely new field" },
            { value: "promotion", label: "Promotion", description: "Positioning yourself for internal growth and leadership" },
            { value: "portfolio", label: "Portfolio", description: "Updating your professional profile for general showcase" },
            { value: "internship", label: "Internship", description: "Securing entry-level placement or university credit roles" },
            { value: "freelance_opportunities", label: "Freelance opportunities", description: "Attracting contract-based, project, or gig work" },
        ],
        validation: { required: true },
    },
    {
        id: "resume_source",
        title: "Where would you like to start?",
        description: "Choose how you'd like to begin creating your resume.",
        type: QUESTION_TYPES.CHOICE_CARDS,
        profilePath: null,
        options: [
            { value: "new_resume", label: "Start a new resume", description: "We'll create a personalized first draft using your profile and AI." },
            { value: "upload_resume", label: "Upload an existing resume", description: "We'll extract, organize, and improve your existing resume." },
            { value: "existing_resume", label: "Continue from my Rez.AI library", description: "Start from one of your previously created resumes." }
        ],
        validation: {
            required: true
        }
    }];

export const getOnboardingValue = (user, path) => {
    if (!path || !user) return undefined;
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), user);
};
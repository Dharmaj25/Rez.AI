import { Certifications } from "./Certifications.jsx";
import { Education } from "./Education.jsx";
import { Experience } from "./Experience.jsx";
import { Header } from "./Header.jsx";
import { ProfessionalSummary } from "./ProfessionalSummary.jsx";
import { Skills } from "./Skills.jsx";
import { sampleData, sampleSections } from "./util";

const Simple = ({ data, sections }) => {
    const templateData = data || sampleData;
    const supportedSections = sections || sampleSections

    return (
        <>
            {supportedSections.includes("header") && <Header data={templateData} />}

            {supportedSections.includes("summary") && <ProfessionalSummary data={templateData} />}

            {supportedSections.includes("experience") && <Experience data={templateData} />}

            {supportedSections.includes("education") && <Education data={templateData} />}

            {supportedSections.includes("skills") && <Skills data={templateData} />}

            {supportedSections.includes("certification") && <Certifications data={templateData} />}
        </>
    );
};

export default Simple;

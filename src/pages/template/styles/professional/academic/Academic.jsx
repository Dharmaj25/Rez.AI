import Experience from "./Experience";
import Header from "./Header"
import Projects from "./Projects";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import { demoData, visibleSections } from "./sampleData";

const Academic = ({ data = null, sections = null }) => {
    const templateData = data || demoData
    const supportedSections = sections || visibleSections;

    return (
        <div className="font-serif">
            {supportedSections.includes("header") && <Header data={templateData} />}

            {supportedSections.includes("summary") && <Summary data={templateData} />}

            {supportedSections.includes("experience") && <Experience data={templateData} />}

            {supportedSections.includes("projects") && <Projects data={templateData} />}

            {supportedSections.includes("education") && <Education data={templateData} />}

            {supportedSections.includes("skills") && <Skills data={templateData} />}
        </div>
    )
}

export default Academic;
import Certification from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import { demoData, visibleSections } from "./sampleData"
import Skills from "./Skills";
import Summary from "./Summary";

const CleanBlue = ({ data, sections }) => {
    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="py-10 px-10 flex flex-col gap-10">
            <div>
                {supportedSections.includes("header") && <Header data={templateData} />}
            </div>
            <div className="flex flex-col gap-6">
                {supportedSections.includes("summary") && <Summary data={templateData} />}
                {supportedSections.includes("education") && <Education data={templateData} />}
                {supportedSections.includes("skills") && <Skills data={templateData} />}
                {supportedSections.includes("experience") && <Experience data={templateData} />}
                {supportedSections.includes("certification") && <Certification data={templateData} />}
            </div>
        </div>
    )
}

export default CleanBlue;
import Certification from "./Certification";
import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import { demoData, visibleSections } from "./sampleData";
import Skills from "./Skills";


const Slate = ({ data, sections }) => {
    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 ">
                <div className="flex flex-col gap-5 bg-slate-500 px-6 py-8">
                    {supportedSections.includes("profile") && <Profile data={templateData} />}
                    {supportedSections.includes("contact") && <Contact data={templateData} />}
                    {supportedSections.includes("education") && <Education data={templateData} />}
                    {supportedSections.includes("skills") && <Skills data={templateData} />}
                    {supportedSections.includes("certification") && <Certification data={templateData} />}
                </div>
            </div>
            <div className="col-span0-2"></div>
        </div>
    )
}

export default Slate;
import Certification from "./Certification";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import { demoData, visibleSections } from "./sampleData";
import Skills from "./Skills";

const Slate = ({ data, sections }) => {
    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-4 bg-slate-800 text-white px-6 py-8 flex flex-col gap-6">
                {supportedSections.includes("profile") && <Profile data={templateData} />}
                {supportedSections.includes("contact") && <Contact data={templateData} />}
                {supportedSections.includes("education") && <Education data={templateData} />}
                {supportedSections.includes("skills") && <Skills data={templateData} />}
                {supportedSections.includes("certification") && <Certification data={templateData} />}
            </div>

            <div className="col-span-8 bg-white p-8 flex flex-col gap-6">
                {supportedSections.includes("header") && <Header data={templateData} />}
                {supportedSections.includes("experience") && <Experience data={templateData} />}
                {supportedSections.includes("projects") && <Projects data={templateData} />}
            </div>
        </div>
    );
};

export default Slate;
import Certification from "./Certification";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Skills from "./Skills";
import Summary from "./Summary";

import { demoData, visibleSections } from "./sampleData";

const Corporate = ({ data, sections }) => {

    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="font-serif">
            {supportedSections.includes("header") && <Header data={templateData} />}
            <div className="grid grid-cols-10 p-6 gap-10">
                <div className="col-span-3 flex flex-col gap-10">
                    <Education data={templateData} />
                    <Skills data={templateData} />
                </div>
                <div className="col-span-7 flex flex-col gap-6">
                    <Summary data={templateData} />
                    <Experience data={templateData} />
                    <Certification data={templateData}/>
                </div>
            </div>
        </div>
    )
}

export default Corporate;
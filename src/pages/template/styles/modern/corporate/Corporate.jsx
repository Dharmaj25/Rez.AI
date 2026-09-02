import Education from "./Education";
import Header from "./Header";
import Skills from "./Skills";

import { demoData, visibleSections } from "./sampleData";

const Corporate = ({ data, sections }) => {

    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="font-serif">
            {supportedSections.includes("header") && <Header data={templateData} />}
            <div className="grid grid-cols-10 p-6">
                <div className="col-span-3 flex flex-col gap-7">
                    <Education data={templateData} />
                    <Skills data={templateData} />
                </div>
                <div className="col-span-7">

                </div>
            </div>
        </div>
    )
}

export default Corporate;
import Education from "./Education";
import Header from "./Header";

import { demoData, visibleSections } from "./sampleData";

const Corporate = ({ data, sections }) => {

    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="font-serif">
            {supportedSections.includes("header") && <Header data={templateData} />}
            <div className="grid grid-cols-10">
                <div className="col-span-3">
                    <Education />
                </div>
                <div className="col-span-7">

                </div>
            </div>
        </div>
    )
}

export default Corporate;
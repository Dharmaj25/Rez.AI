import Header from "./Header";
import { demoData, visibleSections } from "./sampleData"
import Summary from "./Summary";

const CleanBlue = ({ data, sections }) => {
    const templateData = data || demoData;
    const supportedSections = sections || visibleSections;

    return (
        <div className="py-10 px-10 flex flex-col gap-10">
            <div>
                {supportedSections.includes("header") && <Header data={templateData} />}
            </div>
            <div>
                {supportedSections.includes("summary") && <Summary data={templateData} />}
            </div>
        </div>
    )
}

export default CleanBlue;
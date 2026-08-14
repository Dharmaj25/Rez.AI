import { sampleData } from "../../utils";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Developer = () => {
    return (
        <div >
            <Header />
            <Summary />
            <div className="grid grid-cols-2 mt-6 gap-5">
                <div>
                    <Education />
                    <Experience />
                </div>
                <div>
                    <Skills />
                    <Projects />
                    <Certifications />
                    <Achievements />
                </div>
            </div>
        </div>
    )
}

export default Developer;


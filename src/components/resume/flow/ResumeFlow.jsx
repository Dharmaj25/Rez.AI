import { useState, useContext } from "react"
import ResumeIntro from "../intro/ResumeIntro";
import { IntroProvider } from "../intro/IntroContext";

const ResumeFlow = () => {
    const [stage, setStage] = useState("intro");

    if (stage === "intro") {
        return (
            <IntroProvider>
                <ResumeIntro />
            </IntroProvider>
        )
    }

    return (
        <>Hello</>
    )
}

export default ResumeFlow;
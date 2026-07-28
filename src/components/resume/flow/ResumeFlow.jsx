import { useState } from "react"
import ResumeIntro from "../intro/ResumeIntro";

const ResumeFlow = () => {
    const [stage, setStage] = useState("intro");

    if (stage === "intro") {
        return (
            <ResumeIntro />
        )
    }

    return (
        <>Hello</>
    )
}

export default ResumeFlow;
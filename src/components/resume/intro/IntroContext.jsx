import { useState, createContext } from "react";

export const IntroContext = createContext({ stage: "", setStage: () => { } });

export const IntroProvider = ({ children }) => {

    const [stage, setStage] = useState("welcome");

    return (
        <IntroContext.Provider value={{ stage, setStage }}>
            {children}
        </IntroContext.Provider>
    )
}
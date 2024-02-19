import { createContext, useState } from "react";

// Creates the actual context.
export const BrightnessContext = createContext()

// Serves as a wrapper that provides the the brightness context to its children.
export const BrightnessContextProvider = ({ children }) => {
    const [brightness, setBrightness] = useState('light')

    return (
        <BrightnessContext.Provider value={{brightness , setBrightness}} >
            { children }
        </BrightnessContext.Provider>
    )
}
import { createContext, useState } from "react";


export const BrightnessContext = createContext()


export const BrightnessContextProvider = ({ children }) => {
    const [brightness, setBrightness] = useState('light')

    return (
        <BrightnessContext.Provider value={{brightness , setBrightness}} >
            { children }
        </BrightnessContext.Provider>
    )
}
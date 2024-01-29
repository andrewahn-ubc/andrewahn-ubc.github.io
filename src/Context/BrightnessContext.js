import { createContext, useState } from "react";


export const BrightnessContext = createContext()


export const BrightnessContextProvider = ({ children }) => {
    const [brightness, setBrightness] = useState('dark')

    return (
        <BrightnessContext.Provider value={{brightness , setBrightness}} >
            { children }
        </BrightnessContext.Provider>
    )
}
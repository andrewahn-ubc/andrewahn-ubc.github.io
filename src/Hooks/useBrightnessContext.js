import { useContext } from "react"
import { BrightnessContext } from "../Context/BrightnessContext" 


export const useBrightnessContext = () => {
    const context = useContext(BrightnessContext)

    if (!context) {
        return Error("useBrightnessContext was used outside of the scope of brightnessContext.")
    }

    return context
}
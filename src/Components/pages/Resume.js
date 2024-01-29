import React from 'react'
import "../../App.css"
import Footer from '../Footer'
import { useBrightnessContext } from '../../Hooks/useBrightnessContext' 

export default function Resume() {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness == 'light' ? 'resume' : 'resume-dark'}>
            <iframe className='document' src="resume.pdf" width="70%" height="500px" />
        </div>
    )
};
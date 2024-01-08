import React from 'react'
import "../../App.css"
import Footer from '../Footer'

export default function Resume() {
    return (
        <div>
            <h1 className='resume'>RESUME</h1>
            <div>
                <iframe src="resume.pdf" width="80%" height="500px" />
            </div>
        </div>
    )
};
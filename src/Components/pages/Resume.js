import React from 'react'
import "../../App.css"
import Footer from '../Footer'

export default function Resume() {
    return (
        <div className='resume'>
            <iframe className='document' src="resume.pdf" width="70%" height="500px" />
        </div>
    )
};
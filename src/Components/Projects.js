import React from 'react'
import CardItem from '../Subcomponents/CardItem';
import './Projects.css';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';

// Reusable card component for displaying personal projects & meals.
function Projects() {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness === 'light' ? 'cards' : 'cards-dark'}>
            <h1>My projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem  
                            src='images/equihealth1.png'
                            title='EquiHealth'
                            date='April 06, 2024'
                            details='Set healthy habits, Duolingo-style'
                            path="https://github.com/zayan-sheikh/equihealth"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/friendGen_homePage.png'
                            title='FriendGen'
                            date='March 01, 2024'
                            details='Insert friends into your photo using generative AI!'
                            path="https://github.com/andrewahn-ubc/friendGen"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/new-logo.png'
                            title='OurBoard'
                            date='Jan 22, 2024'
                            details='Post a photo on an AR bulletin board for others to view in real time.'
                            path="https://devpost.com/software/ourboard "
                            target='_blank'
                        />
                    </ul>

                    <ul className="cards-items">
                        <CardItem  
                            src='images/study-sessions-wrapped-page.png'
                            title='Study Sessions Wrapped'
                            date='Jan 10, 2024'
                            details='Get summary statistics for your study sessions to stay motivated.'
                            path="https://github.com/andrewahn-ubc/study-sessions-wrapped-v3"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/connections.png'
                            title='Connections'
                            date='Dec 01, 2023'
                            details='Clone of NYT Connections'
                            path="https://connections-nyt-25cdfbc7150a.herokuapp.com/"
                            target='_blank'
                        /> 
                    </ul>

                    <ul className="cards-items"> 
                        <CardItem  
                            src='images/newWordleScreenshot.png'
                            title='Wordle'
                            date='Nov 20, 2023'
                            details='Clone of NYT Wordle'
                            path="https://wordleclone-3314286f69fb.herokuapp.com/"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/new-website.png'
                            title='This Website'
                            date='Aug 20, 2023'
                            details='Me'
                            path="https://github.com/andrewahn-ubc/first-react-website"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/fresherPhoto4.png'
                            title='Fresher'
                            date='Apr 01, 2023'
                            details='Track food expiration dates to avoid food waste.'
                            path="https://github.com/andrewahn-ubc/Fresher"
                            target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
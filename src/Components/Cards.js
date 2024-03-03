import React from 'react'
import CardItem from '../Subcomponents/CardItem';
import './Cards.css';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';

// Reusable card component for displaying personal projects & meals.
function Cards() {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness == 'light' ? 'cards' : 'cards-dark'}>
            <h1>My projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem  
                            src='images/logo.png'
                            title='OurBoard'
                            date='Jan 01, 2024'
                            details='AR Bulletin Board'
                            path="https://devpost.com/software/ourboard "
                            target='_blank'
                        />
                        <CardItem  
                            src='images/friendGen_homePage.png'
                            title='FriendGen'
                            date='Jan 01, 2024'
                            details='Insert an AI friend into your photo'
                            path="https://github.com/andrewahn-ubc/friendGen"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/study-sessions-wrapped-page.png'
                            title='Study Sessions Wrapped'
                            date='Jan 01, 2024'
                            details='Get summary statistics of your study sessions'
                            path="https://github.com/andrewahn-ubc/study-sessions-wrapped-v3"
                            target='_blank'
                        />  
                    </ul>

                    <ul className="cards-items">
                        <CardItem  
                            src='images/connections.png'
                            title='NYT Connections Clone'
                            date='Jan 01, 2024'
                            details=''
                            path="https://connections-nyt-25cdfbc7150a.herokuapp.com/"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/newWordleScreenshot.png'
                            title='Wordle Clone'
                            date='Jan 01, 2024'
                            details=''
                            path="https://wordleclone-3314286f69fb.herokuapp.com/"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/new-website.png'
                            title='This Website lol'
                            date='Jan 01, 2024'
                            details=''
                            path="https://github.com/andrewahn-ubc/first-react-website"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/fresherPhoto4.png'
                            title='Food Expiration Date Tracker'
                            date='Jan 01, 2024'
                            details=''
                            path="https://github.com/andrewahn-ubc/Fresher"
                            target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
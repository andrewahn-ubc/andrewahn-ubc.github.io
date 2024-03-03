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
                            text='OurBoard'
                            path="https://devpost.com/software/ourboard "
                            target='_blank'
                        />
                        <CardItem  
                            src='images/friendGen_homePage.png'
                            text='FriendGen'
                            path="https://github.com/andrewahn-ubc/friendGen"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/study-sessions-wrapped-page.png'
                            text='Study Sessions Wrapped'
                            path="https://github.com/andrewahn-ubc/study-sessions-wrapped-v3"
                            target='_blank'
                        />  
                    </ul>

                    <ul className="cards-items">
                        <CardItem  
                            src='images/connections.png'
                            text='NYT Connections Clone'
                            path="https://connections-nyt-25cdfbc7150a.herokuapp.com/"
                            target='_blank'
                        />  
                        <CardItem  
                            src='images/newWordleScreenshot.png'
                            text='Wordle Clone'
                            path="https://wordleclone-3314286f69fb.herokuapp.com/"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/new-website.png'
                            text='This Website lol'
                            path="https://github.com/andrewahn-ubc/first-react-website"
                            target='_blank'
                        />
                        <CardItem  
                            src='images/fresherPhoto4.png'
                            text='Food Expiration Date Tracker'
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
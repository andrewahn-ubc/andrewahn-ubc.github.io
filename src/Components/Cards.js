import React from 'react'
import CardItem from '../Subcomponents/CardItem';
import './Cards.css';
import { Link } from 'react-router-dom';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';


function Cards() {
    const { brightness } = useBrightnessContext()

  return (
    <div className={brightness == 'light' ? 'cards' : 'cards-dark'}>
        <h1>These are some of my projects:</h1>
           <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  
                        src='images/logo.png'
                        text='OurBoard'
                        path="https://devpost.com/software/ourboard "
                        target='_blank'
                    />
                    <CardItem  
                        src='images/study-sessions-wrapped-page.png'
                        text='Study Sessions Wrapped'
                        path="https://github.com/andrewahn-ubc/study-sessions-wrapped-v3"
                        target='_blank'
                    />  
                    <CardItem  
                        src='images/connections.png'
                        text='NYT Connections Clone'
                        path="https://connections-nyt.vercel.app/"
                        target='_blank'
                    />  
                </ul>
                <ul className="cards__items">
                    <CardItem  
                        src='images/newWordleScreenshot.png'
                        text='Wordle Clone!'
                        path="https://wordleclone-rofc7pu9f-andrewahn-ubcs-projects.vercel.app/"
                        target='_blank'
                    />
                    <CardItem  
                        src='images/Screenshot 2023-12-07 085947.png'
                        text='Personal Website'
                        path="https://ahntaegyoem-44s6ju4k9-andrewahn-ubcs-projects.vercel.app/"
                        target='_blank'
                    />
                    <CardItem  
                        src='images/fresherPhoto4.png'
                        text='Fresher'
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
import React from 'react'
import CardItem from '../Subcomponents/CardItem';
import './Cards.css';
import { Link } from 'react-router-dom';


function Cards() {
  return (
    <div className='cards'>
        <h1>Some of my projects:</h1>
           <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  
                        src='images/newWordleScreenshot.png'
                        text='Wordle Clone!'
                        label='JavsScript/HTML/CSS'
                        path="https://wordleclone-rofc7pu9f-andrewahn-ubcs-projects.vercel.app/"
                        target='_blank'
                    />
                    <CardItem  
                        src='images/connections.png'
                        text='NYT Connections Clone'
                        label='JavsScript/HTML/CSS'
                        path="https://connections-nyt.vercel.app/"
                        target='_blank'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem  
                        src='images/Screenshot 2023-12-07 085947.png'
                        text='Personal Website'
                        label='React.js/CSS'
                        path="https://ahntaegyoem-44s6ju4k9-andrewahn-ubcs-projects.vercel.app/"
                        target='_blank'
                    />
                    <CardItem  
                        src='images/fresherPhoto4.png'
                        text='Fresher'
                        label='Java/JUnit/Java Swing'
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
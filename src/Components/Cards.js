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
                    
                    {/* <CardItem 
                        src='images/img-3.jpg'
                        text='Work in progress...'
                        label='Python?'
                        path='/' 
                    /> */}
                </ul>
                {/* <ul className="cards__items">
                    <CardItem 
                        src='images/img-2.jpg'
                        text='Work in progress...'
                        label='JavaScript?'
                        path='/' 
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        text='Work in progress...'
                        label='React?'
                        path='/' 
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        text='Work in progress...'
                        label='C++?'
                        path='/' 
                    />
                </ul> */}
            </div>
        </div>
    </div>
  )
}

export default Cards
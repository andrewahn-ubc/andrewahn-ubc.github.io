import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Some of my projects:</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  
                        src='images/img-1.jpg'
                        text='Explore the exotic hills in the Himalayas'
                        label='Hiking'
                        path='/services' 
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        text='Discover the underwater mysteries in the Atlantic Ocean'
                        label='Cruise'
                        path='/services' 
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src='images/img-2.jpg'
                        text='Enjoy a relaxing vacation amongst the dolphins in Oahu'
                        label='Luxury'
                        path='/services' 
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        text='Experience the scorching Sahara Desert'
                        label='Adventure'
                        path='/services' 
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        text='Roam the bustling streets of Tokyo'
                        label='Culture'
                        path='/services' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
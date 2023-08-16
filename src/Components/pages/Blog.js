import React from 'react'
import "../../App.css"
import CardItem from '../../Subcomponents/CardItem';

function Blog() {
    return (
        <div className='cards'>
            <h1>Andrew's Blog</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  
                            src='images/img-home.jpg'
                            text='Work in progress...'
                            label='Personal'
                            path='/' 
                        />
                        <CardItem  
                            src='images/img-1.jpg'
                            text='Work in progress...'
                            label='School'
                            path='/' 
                        />
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Work in progress...'
                            label='Friends'
                            path='/' 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Work in progress...'
                            label='Lessons'
                            path='/' 
                        />
                        <CardItem 
                            src='images/img-8.jpg'
                            text='Work in progress...'
                            label='Life'
                            path='/' 
                        />
                        <CardItem 
                            src='images/img-6.jpg'
                            text='Work in progress...'
                            label='Experience'
                            path='/' 
                        />
                    </ul>
                </div>
            </div>
    </div>  
    )
};

export default Blog;
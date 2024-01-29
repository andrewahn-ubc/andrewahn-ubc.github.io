import React from 'react'
import "../../App.css"
import "./Food.css"
import CardItem from '../../Subcomponents/CardItem'

export default function Food() {
    return (
        <div className='food'>
            <div className="foodIntro">
                <h1>Food</h1>
                <h3 className="foodIntroSentence" >
                    Since moving out of dorms last year, my roommate and I have fallen in love with trying to 
                    make our favourite meals at home.
                    We're still amateurs, but I feel quite proud of our meals so I thought I'd share some of 
                    my favourites here :)
                </h3>

                <p>(please excuse our dirty stove)</p>
            </div>
            
            <ul className="foodList">
                <CardItem path="/" src="Food/army_stew.jpg" text="Korean Army Stew" />
                <CardItem path="/" src="Food/burrito_cheese.jpg" text="Cheese-Coated Burrito" />
                <CardItem path="/" src="Food/pork_belly_in_pan.jpg" text="Samgyeopssal (pork belly kbbq)" />
            </ul>

            <ul className="foodList">
                <CardItem path="/" src="Food/first_steak_bite.jpg" text="Flank Steak" />
                <CardItem path="/" src="Food/nacho_bite.jpg" text="Nachos" />
            </ul>

            <ul className="foodList">
                <CardItem path="/" src="Food/dumplings.jpg" text="Dumplings" />
                <CardItem path="/" src="Food/fusilli_carbo.jpg" text="Carbonara" />
                <CardItem path="/" src="Food/shakshukka_closeup.jpg" text="Shaksukka" />
                <CardItem path="/" src="Food/burrito_bowl.jpg" text="Chipotle Bowl" />
            </ul>

            <ul className="foodList">
                <CardItem path="/" src="Food/mabo_tofu.jpg" text="Mabo Tofu" />
                <CardItem path="/" src="Food/kfc.jpg" text=" KFC (Korean Fried Chicken)" />
                <CardItem path="/" src="Food/chicken_fried_rice.jpg" text="Crispy Chicken + Fried Rice" />
            </ul>

            <ul className="foodList">
                <CardItem path="/" src="Food/macaroni_meatballs.jpg" text="Pasta + Meatchunks?" />
                <CardItem path="/" src="Food/kimchi_pancake.jpg" text="Kimchi Pancakes" />
                <CardItem path="/" src="Food/oyakodon_bowl.jpg" text="Oyakodon" />
                <CardItem path="/" src="Food/beef_pepper_lunch.jpg" text="Beef Pepper Lunch" />
            </ul>
        </div>
    )
};
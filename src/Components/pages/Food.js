import React from 'react'
import "../../App.css"
import "./Food.css"
import FoodItem from '../../Subcomponents/FoodItem'
import { useBrightnessContext } from '../../Hooks/useBrightnessContext'

export default function Food() {
    const { brightness } = useBrightnessContext()
    return (
        <div className={brightness === 'light' ? "food" : "food-dark"}>
            <div className={brightness === 'light' ? "foodIntro" : "foodIntro-dark"}>
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
                <FoodItem path="/food" src="Food/army_stew.jpg" title="Korean Army Stew" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/burrito_cheese.jpg" title="Cheese-Coated Burrito" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/pork_belly_in_pan.jpg" title="Pork Belly kbbq" date='Jan 01, 2024' details=''/>
            </ul>

            <ul className="foodList">
                <FoodItem path="/food" src="Food/first_steak_bite.jpg" title="Flank Steak" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/nacho_bite.jpg" title="Nachos" date='Jan 01, 2024' details=''/>
            </ul>

            <ul className="foodList">
                <FoodItem path="/food" src="Food/dumplings.jpg" title="Dumplings" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/fusilli_carbo.jpg" title="Carbonara" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/shakshukka_closeup.jpg" title="Shaksukka" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/burrito_bowl.jpg" title="Chipotle Bowl" date='Jan 01, 2024' details=''/>
            </ul>

            <ul className="foodList">
                <FoodItem path="/food" src="Food/mabo_tofu.jpg" title="Mabo Tofu" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/kfc.jpg" title=" KFC (Korean Fried Chicken)" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/chicken_fried_rice.jpg" title="Crispy Chicken + Fried Rice" date='Jan 01, 2024' details=''/>
            </ul>

            <ul className="foodList">
                <FoodItem path="/food" src="Food/macaroni_meatballs.jpg" title="Pasta + meatballs" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/kimchi_pancake.jpg" title="Kimchi Pancakes" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/oyakodon_bowl.jpg" title="Oyakodon" date='Jan 01, 2024' details=''/>
                <FoodItem path="/food" src="Food/beef_pepper_lunch.jpg" title="Beef Pepper Lunch" date='Jan 01, 2024' details=''/>
            </ul>
        </div>
    )
};
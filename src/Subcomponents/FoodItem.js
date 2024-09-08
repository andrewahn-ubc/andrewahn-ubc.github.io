import React from 'react'
import { Link } from 'react-router-dom'
import { useBrightnessContext } from '../Hooks/useBrightnessContext'
import "./FoodItem.css"

// Abstract the card component display for personal projects and meals. Yay modular programming!
function FoodItem(props) {
    const { brightness } = useBrightnessContext()
  return (
    <>
        <li className="food-item">
            <Link className={brightness === 'light' ? "food-item-link" : "food-item-link-dark"} to={props.path} target='_blank'>
                <div className="food-item-info">
                    <figure className="food-item-pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Loading" className="food-item-img" />
                    </figure>
                    <div className="food-text">
                        <h1 className={brightness === 'light' ? "food-item-text" : "food-item-text-dark"}>
                            {props.title}
                        </h1>
                        <h2 className={brightness === 'light' ? "food-item-date" : "food-item-date-dark"}>
                            {props.date}
                        </h2>
                        <h2 className={brightness === 'light' ? "food-item-details" : "food-item-details-dark"}>
                            {props.details}
                        </h2>
                    </div>
                </div>
            </Link>
        </li>
    </>
  )
}

export default FoodItem|
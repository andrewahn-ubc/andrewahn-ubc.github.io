import React from 'react'
import { Link } from 'react-router-dom'
import { useBrightnessContext } from '../Hooks/useBrightnessContext'
import "./CardItem.css"

// Abstract the card component display for personal projects and meals. Yay modular programming!
function CardItem(props) {
    const { brightness } = useBrightnessContext()
  return (
    <>
        <li className="card-item">
            <Link className={brightness == 'light' ? "card-item-link" : "card-item-link-dark"} to={props.path} target='_blank'>
                <figure className="card-item-pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Loading" className="card-item-img" />
                </figure>
                <div className="card-item-info">
                    <h5 className={brightness == 'light' ? "card-item-text" : "card-item-text-dark"}>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem
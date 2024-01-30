import React from 'react'
import { Link } from 'react-router-dom'
import { useBrightnessContext } from '../Hooks/useBrightnessContext'

function CardItem(props) {
    const { brightness } = useBrightnessContext()
  return (
    <>
        <li className="cards__item">
            <Link className={brightness == 'light' ? "cards__item__link" : "cards__item__link-dark"} to={props.path} target='_blank'>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Loading" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className={brightness == 'light' ? "cards__item__text" : "cards__item__text-dark"}>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem
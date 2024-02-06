import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { Button } from '../Subcomponents/Button';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';


function NavBar() {
  const [button, setButton] = useState(false);
  const { brightness, setBrightness } = useBrightnessContext()

  const handleClick = () => {
    if (brightness == 'light') {
      setBrightness('dark')
    } else {
      setBrightness('light')
    }
  }

  const switchMenu = () => {
    if (button) {
      setButton(false)
    } else {
      setButton(true)
    }
  }


  return (
    <>
        <nav className="NavBar">
            <div className="navbar-container">

              <Link to="/" className={brightness == 'light' ? "navbar-logo" : "navbar-logo-dark"}>
                Andrew Ahn
              </Link>

              <button className={brightness == 'light' ? 'light-menu-button' : 'dark-menu-button'} onClick={switchMenu}>
                <i class={brightness == 'light' ? "fa-solid fa-bars" : "fa-solid fa-bars"}></i>
              </button>

              <ul className={button ? "nav-menu" : "nav-menu-active"}>
                <li className="nav-item">
                  <Link to='/' className={brightness == 'light' ? "nav-links" : "nav-links-dark"}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/resume' className={brightness == 'light' ? "nav-links" : "nav-links-dark"}>
                    Resume
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/food' className={brightness == 'light' ? "nav-links" : "nav-links-dark"}>
                    Food
                  </Link>
                </li>

                <button className={brightness == 'light' ? 'light-button' : 'dark-button'} onClick={handleClick}>
                  <div className={brightness == 'light' ? "toggle-container" : "toggle-container-dark"}>
                    <i class={brightness == 'light' ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
                  </div>
                </button>

              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar

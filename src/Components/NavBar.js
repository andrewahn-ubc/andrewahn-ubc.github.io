import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';

// Navigation bar with links to each page + a dark mode toggle.
function NavBar() {
  const [menu, setMenu] = useState(false);
  const { brightness, setBrightness } = useBrightnessContext()

  // Handles light/dark mode changes.
  const handleDarkModeClick = () => {
    switchMenu()
    if (brightness == 'light') {
      setBrightness('dark')
    } else {
      setBrightness('light')
    }
  }

  // Allows user to view the navbar menu when the aspect ratio is low (ie. on a smartphone).
  const switchMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className={brightness === 'light' ? "navbar-logo" : "navbar-logo-dark"}>
                Andrew Ahn
              </Link>
              <button className={brightness === 'light' ? 'light-menu-button' : 'dark-menu-button'} onClick={switchMenu}>
                <h1>{menu ? "<" : ">"}</h1>
              </button>

              <ul className={menu ? "nav-menu-active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to='/' className={brightness === 'light' ? "nav-links" : "nav-links-dark"} onClick={switchMenu}>
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to='/resume' className={brightness === 'light' ? "nav-links" : "nav-links-dark"} onClick={switchMenu}>
                    Resume
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to='/food' className={brightness === 'light' ? "nav-links" : "nav-links-dark"} onClick={switchMenu}>
                    Food
                  </Link>
                </li>

                {/* <button className={brightness === 'light' ? 'light-button' : 'dark-button'} onClick={handleDarkModeClick}>
                  <div className={brightness === 'light' ? "toggle-container" : "toggle-container-dark"}>
                    <i class={brightness === 'light' ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
                  </div>
                </button> */}
              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar

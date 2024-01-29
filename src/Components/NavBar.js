import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { Button } from '../Subcomponents/Button';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';


function NavBar() {
  const [button, setButton] = useState(true);
  const { brightness } = useBrightnessContext()

  return (
    <>
        <nav className="NavBar">
            <div className="navbar-container">

              <Link to="/" className={brightness == 'light' ? "navbar-logo" : "navbar-logo-dark"}>
                Andrew Ahn
                <i class={brightness == 'light' ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
              </Link>

              <ul className="nav-menu">
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

              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar

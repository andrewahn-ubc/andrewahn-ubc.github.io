import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { Button } from '../Subcomponents/Button';


function NavBar() {
  const [button, setButton] = useState(true);

  return (
    <>
        <nav className="NavBar">
            <div className="navbar-container">

              <Link to="/" className="navbar-logo">
                Andrew Ahn
                <i className="fa-regular fa-face-smile-wink" />
              </Link>

              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to='/' className="nav-links">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/resume' className="nav-links">
                    Resume
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/food' className="nav-links">
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

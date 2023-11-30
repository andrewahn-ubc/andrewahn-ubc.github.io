import React from 'react';
import { Button } from '../Subcomponents/Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-farewell">
            <p className="footer-farewell-message">
                Thanks for visiting!
            </p>
        </section>

        <section className="social-media">
            <div className="social-media-wrap">

                <small className="website-rights"> 
                    <i class="fa-regular fa-copyright"></i> 
                    Andrew Ahn 2023
                </small>

            </div>
        </section>
    </div>
  )
}

export default Footer
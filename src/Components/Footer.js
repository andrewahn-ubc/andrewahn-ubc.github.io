import React from 'react';
import { Button } from '../Subcomponents/Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-farewell">
            <p>
                Thanks for visiting!
            </p>
        </section>

        
    <div className="website-rights">
        <small> 
            <i class="fa-regular fa-copyright"></i> 
            Andrew Ahn 2023
        </small>
    </div>
        
    </div>
  )
}

export default Footer
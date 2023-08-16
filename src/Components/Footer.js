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
            {/* <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input className='footer-input' type='email' name='email' 
                    placeholder='Your Email' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div> */}
        </section>

        {/* <div className="footer-links">
            <div className="footer-links-wrapper">
                <div className="footer-links-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-links-items">
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                    <Link to='/'>Support</Link>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-items">
                    <h2>Video</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className="footer-links-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Tiktok</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div> */}
        <section className="social-media">
            <div className="social-media-wrap">

                <small className="website-rights"> 
                    <i class="fa-regular fa-copyright"></i> 
                    Andrew Ahn 2023
                </small>

                {/* <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to='/' 
                    target='_blank'
                    aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link className="social-icon-link instagram"
                    to='/' 
                    target='_blank'
                    aria-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>

                    <Link className="social-icon-link youtube"
                    to='/' 
                    target='_blank'
                    aria-label='Youtube'>
                        <i className="fab fa-youtube"></i>
                    </Link>

                    <Link className="social-icon-link linkedin"
                    to='/' 
                    target='_blank'
                    aria-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link> 
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default Footer
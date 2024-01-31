import React, { useState } from 'react';
import '../App.css';
import { Button } from '../Subcomponents/Button';
import './HeroSection.css';
import myvideo from '../videos/video-2.mp4';
import { Link } from 'react-router-dom';
import { useBrightnessContext } from '../Hooks/useBrightnessContext';
import Typist from "react-typist";
import { ReactTyped } from "react-typed";

function HeroSection() {
  const { brightness, setBrightness } = useBrightnessContext()

   return (
    <div className={brightness == 'light' ? 'hero-container' : 'hero-container-dark'}>
        <div className={brightness == 'light' ? "hero-subcontainer" : 'hero-subcontainer-dark'}>
            <div className={brightness == 'light' ? "hero-welcome" : "hero-welcome-dark"}>
              <h2>Hi!</h2>
              <p className='hero-welcome-header'>I'm Andrew, a 2nd-year computer science student at UBC.</p>
              <p className='hero-welcome-explain'>
                Scroll to see my tech portfolio :)
              </p>
            </div>

          <div className="hero-intro">
              <img src='images/sus_headshot.jpg' />
              <div className="hero-intro-name">
                <h1>My name is{" "}
                <ReactTyped
                  strings={["안태겸", "Ahn-Tae-Gyoem", "Andrew (he/him)"]}
                  typeSpeed={100}
                  loop
                  backSpeed={50}
                  cursorChar="|"
                  showCursor={true}
                />
                </h1>
                
              </div>
              <div className="hero-links">
                    <Link className="linkedin" to='https://www.linkedin.com/in/andrewahn-ubc/'
                    target='_blank'
                    aria-label='linked'>
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>

                     <Link className="github" to='https://github.com/andrewahn-ubc'
                      target='_blank'
                      aria-label='github'>
                         <i className="fa-brands fa-github"></i>
                     </Link>

                     <Link className="insta" to='https://www.instagram.com/andrew.4hn/'
                     target='_blank'
                     aria-label='insta'>
                        <i className="fa-brands fa-instagram"></i>
                     </Link>

                     <a href="mailto:andrewahn21@gmail.com">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
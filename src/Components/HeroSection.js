import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myvideo from '../videos/video-2.mp4';

function HeroSection() {
   return (
    <div className='hero-container'>
        <div className="hero-subcontainer">
            <div className="hero-welcome">
               {/* <video src={myvideo} autoPlay loop /> */}
              <h2>Hi</h2>
              <p className='hero-welcome-header'>Welcome to my website!</p>
              <p className='hero-welcome-explain'>My name is Andrew. On this page, you'll find my technical skills and 
             my highlighted projects. 
              </p>
              <p className='hero-welcome-explain'>Feel free to scroll!</p>
             {/* <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                  GET STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                  WATCH TRAILER <i className='far fa-play-circle' />
                </Button> 
              </div> */}
            </div>

          <div className="hero-intro">
              <img src='images/sus_headshot.jpg' />
              <h1> Me</h1>
              <p >2nd-year Computer Science student at UBC</p>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
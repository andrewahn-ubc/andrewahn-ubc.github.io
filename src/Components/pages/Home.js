import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Projects from '../Projects';
import Skills from '../Skills';
import { useBrightnessContext } from '../../Hooks/useBrightnessContext';

function Home() {
  const { brightness } = useBrightnessContext()

  return (
    <div className={brightness == 'light' ? 'home-wrapper' : 'home-wrapper-dark'}>
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
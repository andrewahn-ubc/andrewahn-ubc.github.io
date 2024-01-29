import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Skills from '../Skills';
import { useBrightnessContext } from '../../Hooks/useBrightnessContext';

function Home() {
  const { brightness } = useBrightnessContext()

  return (
    <div className={brightness == 'light' ? 'home-wrapper' : 'home-wrapper-dark'}>
      <HeroSection />
      <Skills />
      <Cards />
    </div>
  )
}

export default Home
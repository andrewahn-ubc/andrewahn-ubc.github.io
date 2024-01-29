import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Skills from '../Skills';

function Home() {
  return (
    <div className='home-wrapper'>
      <HeroSection />
      <Skills />
      <Cards />
    </div>
  )
}

export default Home
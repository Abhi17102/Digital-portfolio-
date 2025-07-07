import React from 'react';
import StarBackground from './components/StarBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import TechnicalSkills from './components/TechnicalSkills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins overflow-x-hidden">
      <StarBackground />
      <Navigation />
      <Hero />
      <SocialLinks />
      <TechnicalSkills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Music from '../components/Music';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';

const HomePage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Music />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
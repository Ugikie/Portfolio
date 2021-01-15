import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Portfolio = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const { width } = useContext(DarkModeContext);
  return (
    <>
      <Navbar
        width={width}
        contactFormOpen={contactFormOpen}
        setContactFormOpen={setContactFormOpen}
      />
      <Hero
        width={width}
        setContactFormOpen={setContactFormOpen}
        contactFormOpen={contactFormOpen}
      />
      <AboutMe width={width} />
      <Projects />
      <Footer />
    </>
  );
};

export default Portfolio;

import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Intro from './Intro';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import { DarkModeContext } from '../contexts/DarkModeContext';
import MySkills from './MySkills';

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
      <Intro width={width} />
      <Projects width={width} />
      <AboutMe width={width} />
      <MySkills width={width} />
      <Footer width={width} />
    </>
  );
};

export default Portfolio;

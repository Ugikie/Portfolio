import React, { useState } from 'react';
import { Grid, Paper, Typography, Fade } from '@material-ui/core';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

const Portfolio = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  return (
    <>
      <Navbar setContactFormOpen={setContactFormOpen} />
      <Hero
        setContactFormOpen={setContactFormOpen}
        contactFormOpen={contactFormOpen}
      />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default Portfolio;

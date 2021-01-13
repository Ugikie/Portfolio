import { Paper, makeStyles, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import reactJSLogo from '../reactjs.png';
import FooterContactForm from './FooterContactForm';
import FooterContactInfo from './FooterContactInfo';
import FooterLinks from './FooterLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[800],
    padding: '2rem 3rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justify='space-between' alignItems='center'>
        <FooterLinks />
        <FooterContactInfo />
        <FooterContactForm />
      </Grid>
    </Paper>
  );
};

export default Footer;

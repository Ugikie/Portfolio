import { Paper, makeStyles, Grid, Typography, Hidden } from '@material-ui/core';
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
    [theme.breakpoints.down('lg')]: {
      padding: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    },
  },
}));

const Footer = ({ width }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justify='space-evenly' alignItems='stretch'>
        <FooterLinks width={width} />
        <Hidden xsDown>
          <FooterContactInfo width={width} />
        </Hidden>
        <Hidden smDown>
          <FooterContactForm width={width} />
        </Hidden>
      </Grid>
    </Paper>
  );
};

export default Footer;

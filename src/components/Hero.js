import React from 'react';
import { Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heroMe from '../me.svg';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme } from '@material-ui/core/styles';
import '../Hero.css';
import ContactForm from './ContactForm';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import SelfAvatar from './SelfAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  grid: {
    textAlign: 'center',
  },
  paper: {
    // border: '1px solid blue',
    // height: '100%',
    padding: '2rem',
    backgroundColor: theme.palette.prefersDarkMode
      ? theme.palette.background.paper
      : theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 6rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  heading: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    left: '97%',
  },
  heroImage: {
    paddingTop: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0',
    },
  },
  heroImg: {
    [theme.breakpoints.down('xs')]: {
      width: 250,
    },
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    [theme.breakpoints.up('lg')]: {
      width: 500,
    },
  },
  contactGreeting: {
    padding: '0 5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
      padding: '0',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '44px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '46px',
    },
  },
}));

const Hero = ({ width, contactFormOpen, setContactFormOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  // const mainGridStyles = contactFormOpen
  //   ? {}
  //   : { maxWidth: width === 'xs' ? '90%' : '100%' };

  return (
    <Grid
      container
      justify='space-evenly'
      alignItems='center'
      direction='column'
      className={classes.root}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={contactFormOpen ? 10 : 8}
        lg={contactFormOpen ? 8 : 10}
        // style={mainGridStyles}
      >
        <Paper
          elevation={theme.palette.prefersDarkMode ? 3 : 0}
          className={classes.paper}
          style={{
            padding: contactFormOpen ? '1rem 0' : '2rem',
            transition:
              'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          }}
        >
          {contactFormOpen ? (
            <Grow in={true} unmountOnExit>
              <Grid
                container
                justify='center'
                alignItems='center'
                style={{ position: 'relative' }}
              >
                <Grid
                  item
                  xs={12}
                  container
                  justify='flex-end'
                  alignItems='center'
                >
                  <Hidden xsDown>
                    <Grid
                      item
                      style={{ marginBottom: '-4rem', paddingRight: '1rem' }}
                    >
                      <IconButton onClick={() => setContactFormOpen(false)}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Hidden>
                </Grid>
                <Grid
                  item
                  xs={11}
                  xl={10}
                  container
                  justify='center'
                  spacing={2}
                >
                  <SelfAvatar width={width} />
                  <Grid item xs={12}>
                    <Divider
                      light
                      variant='fullWidth'
                      style={{ marginTop: '-4rem', marginBottom: '4rem' }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <Typography
                      variant={
                        width === 'xs' ? 'h5' : width === 'sm' ? 'h4' : 'h3'
                      }
                      className={classes.contactGreeting}
                      component='h2'
                      align='center'
                      gutterBottom
                    >
                      {width === 'sm' || width === 'xs'
                        ? 'Thanks for reaching out. I would love to connect!'
                        : 'Thanks for taking the time to reach out. I would love to connect with you!'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ContactForm
                    width={width}
                    setContactFormOpen={setContactFormOpen}
                  />
                </Grid>
              </Grid>
            </Grow>
          ) : (
            <Fade in={true} unmountOnExit>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
              >
                <Grid item className={classes.grid}>
                  <Typography
                    variant={width === 'xs' ? 'h4' : 'h3'}
                    component='h2'
                    className={classes.heading}
                    gutterBottom={width !== 'xs'}
                  >
                    Full Stack Developer, Thinker & Creator
                  </Typography>
                  <Typography
                    variant={width === 'xs' ? 'h6' : 'h5'}
                    component='h2'
                    style={{ fontWeight: 300 }}
                    gutterBottom
                  >
                    I create new things with code and love it every day
                  </Typography>
                </Grid>
                <Grid item className={classes.heroImage}>
                  <img src={heroMe} className={classes.heroImg} alt='' />
                </Grid>
              </Grid>
            </Fade>
          )}
        </Paper>
      </Grid>
      {!contactFormOpen && (
        <Grid item style={{ padding: 0 }}>
          <AnchorLink href='#about'>
            <IconButton className='bounce'>
              <KeyboardArrowDownIcon />
            </IconButton>
          </AnchorLink>
        </Grid>
      )}
    </Grid>
  );
};

export default Hero;

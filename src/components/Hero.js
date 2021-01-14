import React, { useContext } from 'react';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';
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
    backgroundColor: theme.palette.prefersDarkMode
      ? theme.palette.background.paper
      : theme.palette.background.default,
  },
  heading: {
    fontWeight: 'bold',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    left: '95%',
  },
  heroImage: {
    paddingTop: '2rem',
  },
}));

const Hero = ({ contactFormOpen, setContactFormOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      style={{ paddingTop: '3rem', paddingBottom: '0.5rem' }}
      direction='column'
      spacing={4}
      className={classes.root}
    >
      <Grid item xs={8}>
        <Paper
          elevation={theme.palette.prefersDarkMode ? 3 : 0}
          className={classes.paper}
          style={{
            padding: `${contactFormOpen ? '1.5rem' : '5rem'}`,
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
                <IconButton
                  onClick={() => setContactFormOpen(false)}
                  className={classes.closeIcon}
                >
                  <CloseIcon />
                </IconButton>
                <Grid item xs={10} container justify='center' spacing={2}>
                  <SelfAvatar />
                  <Grid item xs={12}>
                    <Divider
                      light
                      variant='fullWidth'
                      style={{ marginTop: '-4rem', marginBottom: '4rem' }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='h3'
                      style={{
                        padding: '0 5rem',
                        fontWeight: 'bold',
                        marginBottom: '3rem',
                      }}
                      component='h2'
                      align='center'
                    >
                      Thanks for taking the time to reach out. I would love to
                      connect with you!
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ContactForm setContactFormOpen={setContactFormOpen} />
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
                    variant='h3'
                    component='h2'
                    className={classes.heading}
                    gutterBottom
                  >
                    Full Stack Developer, Thinker & Creator
                  </Typography>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ fontWeight: 300 }}
                    gutterBottom
                  >
                    I create new things with code and love it every day
                  </Typography>
                </Grid>
                <Grid item className={classes.heroImage}>
                  <img src={heroMe} width='400' alt='' />
                </Grid>
              </Grid>
            </Fade>
          )}
        </Paper>
      </Grid>
      {!contactFormOpen && (
        <Grid item>
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

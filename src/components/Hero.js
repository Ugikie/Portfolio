import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heroMe from '../me.svg';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../Hero.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  grid: {
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='space-around'
      alignItems='center'
      direction='column'
      spacing={4}
      className={classes.root}
    >
      <Grid item>
        <Paper elevation={3} style={{ padding: '5rem' }}>
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
        </Paper>
      </Grid>
      <Grid item>
        <AnchorLink href='#about'>
          <IconButton className='bounce'>
            <KeyboardArrowDownIcon />
          </IconButton>
        </AnchorLink>
      </Grid>
    </Grid>
  );
};

export default Hero;

import React from 'react';
import { Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import codeSVG from '../code.svg';
import Interest from './Interest';
import picOfMe from '../picofme_square.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '75vh',
    backgroundColor: theme.palette.primary.main,
  },
  grid: {
    // height: '100%',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    // border: '1px solid red',
  },
  picOfMe: {
    margin: 'auto',
    borderRadius: 10,
    boxShadow:
      '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
  },
}));

const AboutMe = ({ width }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} id='about' elevation={10}>
      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.grid}
      >
        <Hidden smDown>
          <Grid
            item
            xs={6}
            sm={5}
            lg={4}
            style={{
              display: 'flex',
            }}
          >
            <img
              className={classes.picOfMe}
              src={picOfMe}
              alt=''
              style={{
                width: '65%',
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={10} md={6} lg={5}>
          <Typography
            style={{
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0px 2px 3px rgba(0,0,0,0.34)',
            }}
            variant='h4'
            align={width === 'xs' ? 'center' : 'left'}
            component='h2'
            gutterBottom
          >
            Hey, I'm Austin!
          </Typography>
          <Typography
            style={{
              color: 'white',
              textShadow: '0px 2px 3px rgba(0,0,0,0.24)',
            }}
            variant='h6'
            align={width === 'xs' ? 'center' : 'left'}
            component='p'
          >
            Freshly graduated with a bachelor's in computer engineering, I live,
            breathe, and dream code, and I'm ready to create the next big thing!
            I have always believed that its easier to come up with good ideas
            when you have a better sense of what you are capable of with the
            skills you have. So I have always strived to learn as much as I can
            about the things that interest me. I'm looking to join a team of
            passionate developers who will help me gain more experience as a
            full stack dev, and introduce me to new concepts along the way!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;

// Trying to work on my design skills
// love working with React
// for the past 4 years ive been dabbling in various languages trying to find my way
// front-end and back-end
// love for making things
// to literally change the world
// my current stack includes Node.js, Express.js, MongoDB, React.js, Material UI Library
// maintained and developed multiple projects from scratch
// "I specialize in"

// For the last several years, I have been trying to figure out which
// path to take in my journey as a software developer. I learned things
// involving game development, artifical intelligence, creating mobile
// apps, automation tools, and so much more. It wasn't until I
// discovered React.js that I realized what my true passion was.
// Although I still have much to learn - especially when it comes to
// design - I think I have found what interests me the most and gives
// me as much flexibility in what I can create.

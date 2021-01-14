import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import codeSVG from '../code.svg';
import Interest from './Interest';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '75vh',
    backgroundColor: theme.palette.primary.main,
  },
  grid: {
    height: '100%',
    padding: '5rem 9rem',
  },
  about: {
    height: '100%',
  },
  mainText: {
    color: 'white',
    lineHeight: '1.5',
  },
  title: {
    fontWeight: 'bold',
    color: '#ffc107',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} id='about' elevation={10}>
      <Grid
        container
        justify='space-around'
        alignItems='center'
        className={classes.grid}
      >
        <Grid item>
          <img src={codeSVG} alt='Code' width='600' />
        </Grid>
        <Grid item xs={5} className={classes.about}>
          <Typography variant='h4' component='h2' className={classes.title}>
            Full Stack Developer
          </Typography>
          <Typography
            variant='h3'
            component='h2'
            className={classes.mainText}
            gutterBottom
          >
            A little bit about me.
          </Typography>
          <Typography
            variant='body1'
            component='h2'
            className={classes.mainText}
            gutterBottom
            paragraph
          >
            I loving coding things from scratch and bringing my ideas to life in
            the browser.
          </Typography>
          <Typography
            variant='body1'
            component='h2'
            className={classes.mainText}
          >
            My #1 motto is "Underpromise, and overdeliver", but that doesn't
            mean I can't guarentee excellence in the things I create! My main
            experience lies in coding up the full stack, but I also dabble in
            things like:
          </Typography>
          <Grid
            container
            direction='column'
            spacing={1}
            style={{ marginTop: '1rem' }}
          >
            <Interest topic='Node.js' />
            <Interest topic='React.js' />
            <Interest topic='Custom APIs' />
            <Interest topic='Discord Bot Integration' />
            <Interest topic='Game Development' />
            <Interest topic='Artificial Intelligence' />
            <Interest topic='RF Technologies' />
            <Interest topic='Digital Electronics & Microprocessors' />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;

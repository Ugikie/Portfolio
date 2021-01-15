import React from 'react';
import { Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import codeSVG from '../code.svg';
import Interest from './Interest';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '75vh',
    backgroundColor: theme.palette.primary.main,
  },
  grid: {
    // height: '100%',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    // border: '1px solid red',
  },
  about: {},
  mainText: {
    color: 'white',
    lineHeight: '1.5',
  },
  title: {
    fontWeight: 'bold',
    color: '#ffc107',
  },
}));

const AboutMe = ({ width }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} id='about' elevation={10}>
      <Grid
        container
        justify='space-around'
        alignItems='center'
        className={classes.grid}
      >
        <Hidden mdDown>
          <Grid item>
            <img src={codeSVG} alt='Code' width='600' />
          </Grid>
        </Hidden>
        <Grid item xs={10} sm={8} lg={5} className={classes.about}>
          <Typography
            variant={width === 'xs' ? 'h6' : 'h4'}
            component='h2'
            className={classes.title}
          >
            Full Stack Developer
          </Typography>
          <Typography
            variant={width === 'xs' ? 'h4' : 'h3'}
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
            style={{ paddingLeft: '2rem' }}
          >
            <Interest topic='Node.js' />
            <Interest topic='React.js' />
            <Interest topic='Custom APIs' />
            <Interest topic='Discord Bot Integration' />
            <Interest topic='Game Development' />
            <Interest topic='Artificial Intelligence' />
            <Interest topic='RF Technologies' />
            {width === 'xs' ? (
              <Interest topic='Digital Media Production' />
            ) : (
              <Interest topic='Digital Electronics & Microprocessors' />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;

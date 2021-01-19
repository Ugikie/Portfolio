import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import '../shake.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid red',
    margin: '2rem 0',
  },
  logo: {},
  name: {
    fontWeight: 600,
  },
}));

const SkillIcon = ({ name, logo, url }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justify='center'
      alignItems='center'
      direction='column'
      xs={6}
      sm={4}
      md={3}
      className={classes.root}
    >
      <Grid item className={`${classes.logo} shake`}>
        <a href={url}>
          <img src={logo} alt={`${name} logo`} width='80' height='80' />
        </a>
      </Grid>
      <Grid item>
        <Typography
          variant='h6'
          component='h2'
          align='center'
          className={classes.name}
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SkillIcon;

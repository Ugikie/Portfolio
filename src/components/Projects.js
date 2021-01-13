import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Project from './Project';
import projectsData from '../projectsData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem 15rem',
    backgroundColor: theme.palette.background.default,
  },
  header: {
    fontWeight: 'bold',
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [viewingCard, setViewingCard] = useState(-1);

  return (
    <Grid
      id='projects'
      container
      justify='center'
      alignItems='center'
      spacing={4}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography
          variant='h4'
          align='center'
          component='h2'
          gutterBottom
          className={classes.header}
        >
          {viewingCard === -1
            ? 'My Recent Work'
            : projectsData[viewingCard].name}
        </Typography>
      </Grid>
      {viewingCard === -1 ? (
        projectsData.map((project) => (
          <Project
            key={project.id}
            setViewingCard={setViewingCard}
            project={project}
          />
        ))
      ) : (
        <Project
          setViewingCard={setViewingCard}
          project={projectsData[viewingCard]}
          viewingFullDetails={true}
        />
      )}
    </Grid>
  );
};

export default Projects;

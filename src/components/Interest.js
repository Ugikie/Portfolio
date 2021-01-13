import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import terminalSVG from '../terminal.svg';

const Interest = ({ topic }) => {
  return (
    <Grid item container alignItems='center' style={{ color: 'white' }}>
      <Grid item>
        <img src={terminalSVG} alt='Terminal' />
      </Grid>
      <Grid item>
        <Typography
          variant='body1'
          component='span'
          style={{ marginLeft: '1rem' }}
        >
          {topic}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Interest;

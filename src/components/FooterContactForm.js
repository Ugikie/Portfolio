import {
  Button,
  Grid,
  Paper,
  TextField,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  form: {},
  input: {
    borderRadius: '3px',
    backgroundColor: '#1f2022',
    boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.1)',
    color: '#d1d2d2',
    '& label, & input, & textarea': {
      color: '#d1d2d2',
    },
  },
}));

const FooterContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    alert(name);
    setName('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Grid xs={4} item>
      <form onSubmit={submitForm} className={classes.form}>
        <Grid container justify='flex-end'>
          <Grid item xs={2} container justify='center'>
            <Grid item>
              <Typography
                variant='h6'
                component='h2'
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Contact Me
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={10} justify='flex-end'>
            <Grid item xs={11}>
              <TextField
                style={{ marginBottom: '1rem' }}
                color='primary'
                className={classes.input}
                fullWidth
                label='Name'
                value={name}
                onChange={handleNameChange}
                variant='filled'
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                color='primary'
                className={classes.input}
                fullWidth
                multiline
                rows={4}
                label='Message'
                value={message}
                onChange={handleMessageChange}
                variant='filled'
              />
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                size='large'
                style={{ marginTop: '1rem' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default FooterContactForm;

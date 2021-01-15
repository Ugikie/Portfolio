import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  IconButton,
  Snackbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import useEmailJS from '../hooks/useEmailJS';

const useStyles = makeStyles((theme) => ({
  form: {},
  // input: {
  //   borderRadius: '3px',
  //   backgroundColor: '#1f2022',
  //   boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.1)',
  //   color: '#d1d2d2',
  //   '& label, & input, & textarea': {
  //     color: '#d1d2d2',
  //   },
  // },
}));

const ContactForm = ({ width, setContactFormOpen }) => {
  const classes = useStyles();
  const [
    messageInfo,
    open,
    handleClose,
    handleExited,
    sentMessage,
    unsendMessage,
    handleMessageChange,
    message,
    handleEmailChange,
    email,
    name,
    handleNameChange,
    submitForm,
  ] = useEmailJS();

  return (
    <>
      <form onSubmit={submitForm} className={classes.form}>
        <Grid container justify='center'>
          <Grid
            item
            container
            xs={10}
            sm={8}
            justify={width === 'xs' ? 'center' : 'flex-end'}
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <TextField
                color='primary'
                required
                className={classes.input}
                fullWidth
                label='Name'
                type='text'
                value={name}
                onChange={handleNameChange}
                variant='filled'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='primary'
                required
                className={classes.input}
                fullWidth
                label='Email'
                type='email'
                value={email}
                onChange={handleEmailChange}
                variant='filled'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color='primary'
                className={classes.input}
                fullWidth
                required
                multiline
                rows={width === 'sm' || width === 'xs' ? 4 : 8}
                label='Message'
                value={message}
                onChange={handleMessageChange}
                variant='filled'
              />
            </Grid>
            <Grid item style={{ paddingRight: 0 }}>
              <Button
                color='secondary'
                size={
                  width === 'sm' ? 'medium' : width === 'xs' ? 'small' : 'large'
                }
                onClick={() => setContactFormOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={sentMessage}
                size={
                  width === 'sm' ? 'medium' : width === 'xs' ? 'small' : 'large'
                }
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <>
            {sentMessage && (
              <Button color='primary' size='medium' onClick={unsendMessage}>
                UNDO
              </Button>
            )}
            <IconButton
              aria-label='close'
              color='inherit'
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default ContactForm;

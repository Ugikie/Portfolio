import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  Hidden,
} from '@material-ui/core';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useEmailJS from '../hooks/useEmailJS';

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

const FooterContactForm = ({ width }) => {
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
      <Grid xs={4} xl={4} item>
        <form onSubmit={submitForm} className={classes.form}>
          <Grid container justify='flex-end'>
            <Hidden mdDown>
              <Grid item xs={3} xl={2} container justify='center'>
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
            </Hidden>
            <Grid
              item
              container
              md={12}
              lg={9}
              xl={10}
              justify='flex-end'
              spacing={1}
              style={{ paddingLeft: '1rem' }}
            >
              <Hidden lgUp>
                <Grid item xs={12}>
                  <Typography
                    variant='h6'
                    component='h2'
                    align='center'
                    style={{ color: 'white', fontWeight: 'bold' }}
                  >
                    Contact Me
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={6} xl={5}>
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
              <Grid item xs={6}>
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

              <Grid item xs={12} xl={11}>
                <TextField
                  color='primary'
                  className={classes.input}
                  fullWidth
                  required
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
                  size='medium'
                  style={{
                    marginTop: '0.25rem',
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
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

export default FooterContactForm;

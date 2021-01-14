import { Paper, makeStyles, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import reactJSLogo from '../reactjs.png';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 174,
    height: 100,
    backgroundColor: 'none',
  },
  footerLink: {
    marginRight: '0.25rem',
    color: theme.palette.grey[300],
  },
  copyright: {
    color: theme.palette.grey[600],
    marginTop: '0.25rem',
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.grey[300],
  },
  footerIcon: {
    width: 38,
    height: 38,
    marginTop: '0.5rem',
    padding: '0.3rem',
    backgroundColor: theme.palette.grey[900],
    borderRadius: '50%',
  },
  contactLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const FooterContactInfo = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      alignItems='center'
      justify='center'
      xs={4}
      style={{ color: '#fafafa' }}
    >
      <Grid item xs={7} container spacing={2} alignItems='center'>
        <Grid item>
          <PersonPinCircleIcon className={classes.footerIcon} />
        </Grid>
        <Grid item>
          <Typography display='inline'>Los Angeles, CA</Typography>
        </Grid>
      </Grid>
      <Grid item xs={7} container spacing={2} alignItems='center'>
        <Grid item>
          <PhoneIcon className={classes.footerIcon} />
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: 'bold' }} display='inline'>
            (805) 915-9181
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={7} container spacing={2} alignItems='center'>
        <Grid item>
          <MailIcon className={classes.footerIcon} />
        </Grid>
        <Grid item>
          <Typography display='inline'>
            <a
              href='mailto:hello@austinadam.com'
              target='_blank'
              rel='noopener noreferrer'
              className={classes.contactLink}
            >
              hello@austinadam.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterContactInfo;

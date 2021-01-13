import { Paper, makeStyles, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import reactJSLogo from '../reactjs.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
  socialLinks: {
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
  },
  socialIcon: {
    color: 'white',
    fontSize: 38,
    marginRight: '0.5rem',
    borderRadius: 2,
    padding: '0.25rem',
    backgroundColor: theme.palette.grey[800],
  },
}));

const FooterLinks = () => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Grid container direction='column'>
        <Grid item>
          <img className={classes.logo} src={reactJSLogo} alt='React JS Logo' />
        </Grid>
        <Grid
          item
          container
          alignItems='center'
          style={{ marginLeft: '0.5rem' }}
        >
          {['Home', 'About', 'Projects', 'GitHub'].map((link) => (
            <Grid item key={link} className={classes.footerLink}>
              <Typography>
                {link === 'GitHub' ? (
                  <a
                    href={'https://github.com/Ugikie'}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria={'Ugikie on GitHub'}
                    className={classes.navLink}
                  >
                    {link}
                  </a>
                ) : (
                  <AnchorLink
                    // onClick={() => setCurrentPage(name)}
                    href={`#${link.toLowerCase()}`}
                    className={classes.navLink}
                  >
                    {link} ·
                  </AnchorLink>
                )}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item style={{ marginLeft: '0.5rem' }}>
          <Typography className={classes.copyright}>
            Austin Adam &copy; 2021
          </Typography>
        </Grid>
        <Grid item container className={classes.socialLinks}>
          <Grid item>
            <a
              href={'https://www.linkedin.com/in/austin-adam-56771068/'}
              target='_blank'
              rel='noopener noreferrer'
              aria={'Austin Adam on LinkedIn'}
              className={classes.navLink}
            >
              <LinkedInIcon className={classes.socialIcon} />
            </a>
          </Grid>
          <Grid item>
            <a
              href={'https://github.com/Ugikie'}
              target='_blank'
              rel='noopener noreferrer'
              aria={'Ugikie on GitHub'}
              className={classes.navLink}
            >
              <GitHubIcon
                style={{ padding: '0.4rem' }}
                className={classes.socialIcon}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterLinks;

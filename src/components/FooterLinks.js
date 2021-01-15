import { Paper, makeStyles, Grid, Typography, Hidden } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import reactJSLogo from '../reactjs.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
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
    borderRadius: 3,
    backgroundColor: theme.palette.grey[900],
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
}));

const FooterLinks = () => {
  const classes = useStyles();
  return (
    <Grid item xs={8} sm={6} md={4}>
      <Grid
        container
        direction='column'
        style={{ height: '100%' }}
        justify='center'
      >
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
              <LinkedInIcon
                className={classes.socialIcon}
                style={{ padding: '0.2rem' }}
              />
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
                style={{ padding: '0.3rem' }}
                className={classes.socialIcon}
              />
            </a>
          </Grid>
          <Hidden smUp>
            <Grid item>
              <a
                href='mailto:hello@austinadam.com'
                target='_blank'
                rel='noopener noreferrer'
                aria={'Send Austin a message via email'}
                className={classes.navLink}
              >
                <MailIcon
                  style={{ padding: '0.3rem' }}
                  className={classes.socialIcon}
                />
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterLinks;

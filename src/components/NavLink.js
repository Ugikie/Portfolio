import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontWeight: '700',
    textDecoration: 'none',
    marginLeft: '2rem',
    letterSpacing: '0.04em',
    position: 'relative',
    color: theme.palette.text.secondary,
    padding: '0.25rem 0px',
    transition: 'color 0.15s ease-in-out',
    '&:before': {
      transform: 'translateX(-50%)',
      width: '20%',
      height: '6px',
      position: 'absolute',
      bottom: '-6px',
      left: '50%',
      opacity: '0',
      pointerEvents: 'none',
      content: "''",
      borderRadius: '6px',
      background: theme.palette.primary.main,
      transition: 'all ease 0.3s',
    },
    '&:hover': {
      color: theme.palette.text.primary,
    },
    '&:hover:before': {
      width: '100%',
      opacity: '1',
    },
  },
  navLinkActive: {
    color: theme.palette.text.primary,
    '&:before': {
      width: '100%',
      opacity: '1',
    },
  },
}));

const NavLink = ({ currentPage, setCurrentPage, name, formattedName, url }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Typography>
        {url ? (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            // aria={name}
            className={`${classes.navLink} ${
              currentPage === name ? classes.navLinkActive : null
            }`}
          >
            {formattedName}
          </a>
        ) : (
          <AnchorLink
            onClick={() => setCurrentPage(name)}
            href={`#${name}`}
            className={`${classes.navLink} ${
              currentPage === name ? classes.navLinkActive : null
            }`}
          >
            {formattedName}
          </AnchorLink>
        )}
      </Typography>
    </Grid>
  );
};

export default NavLink;

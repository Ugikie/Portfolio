import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Container,
  Fab,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavLink from './NavLink';
import ThemeToggler from './ThemeToggler';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  navBar: {
    marginTop: '1rem',
    padding: '0.25rem 0',
  },
  brandName: {
    color: theme.palette.text.primary,
  },
  navbarBrand: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '2px',
    paddingTop: '.3125rem',
    paddingBottom: '.3125rem',
    marginRight: '1rem',
    fontSize: '1.25rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:after': {
      width: '100%',
      maxWidth: '30%',
      marginLeft: '0.75rem',
      height: '6px',
      display: 'block',
      content: "''",
      borderRadius: '1000px',
      background: theme.palette.primary.main,
      transition: 'max-width ease 0.3s',
    },
    '&:hover:after': {
      maxWidth: '15%',
    },
  },
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
  contactButton: {
    marginLeft: '1rem',
    borderRadius: '2rem',
    border: `1px solid ${theme.palette.primary.main}`,
    fontWeight: 'bold',
    transition: 'all ease 0.3s',
    '&:hover': {
      transform: 'scale(1.075)',
      background: 'none',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  backToTop: {
    position: 'fixed',
    top: '2%',
    left: '96%',
    zIndex: '100',
  },
}));

const Navbar = ({ setContactFormOpen }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container id='home'>
      {scrollTop >= 300 && (
        <AnchorLink href='#home'>
          <Fab
            aria-label='Change Theme'
            className={classes.backToTop}
            style={{ background: 'none', boxShadow: 'none' }}
          >
            <IconButton style={{ backgroundColor: 'none' }}>
              <ExpandLessIcon />
            </IconButton>
          </Fab>
        </AnchorLink>
      )}
      <ThemeToggler x={scrollTop >= 300 ? 8 : 2} y={96} />
      <Grid
        container
        justify='space-between'
        alignItems='center'
        className={classes.navBar}
      >
        <Grid item>
          <Typography
            onClick={() => setCurrentPage('home')}
            className={classes.navbarBrand}
          >
            &lt;<span className={classes.brandName}>Austin Adam</span> /&gt;
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify='center' alignItems='center'>
            <NavLink
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              name='home'
              formattedName='Home'
            />
            <NavLink
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              name='about'
              formattedName='About'
            />
            <NavLink
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              name='projects'
              formattedName='Projects'
            />
            <NavLink
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              url='https://github.com/Ugikie'
              name='github'
              formattedName='GitHub'
            />
            {/* <Grid
              item
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              
            </Grid> */}
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                onClick={() => setContactFormOpen(true)}
                className={classes.contactButton}
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;

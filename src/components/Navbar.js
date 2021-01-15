import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Container,
  Drawer,
  Fab,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavLink from './NavLink';
import ThemeToggler from './ThemeToggler';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuIcon from '@material-ui/icons/Menu';
import { DarkModeContext } from '../contexts/DarkModeContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';

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
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
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
  backToTop: {},
  menuLink: {
    fontWeight: '700',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    position: 'relative',
    color: theme.palette.text.secondary,
    transition: 'color 0.15s ease-in-out',
    '&:before': {
      transform: 'translateX(-50%)',
      width: '20%',
      height: '6px',
      position: 'absolute',
      bottom: '-6px',
      left: '50%',
      opacity: '0',
      zIndex: 10,
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
  menuLinkActive: {
    color: theme.palette.text.primary,
    '&:before': {
      width: '100%',
      opacity: '1',
    },
  },
}));

const positions = {
  xs: {
    x: 6,
    y: 92,
  },
  sm: {
    x: 6,
    y: 92,
  },
  md: {
    x: 6,
    y: 92,
  },
  lg: {
    x: 93,
    y: 1,
  },
  xl: {
    x: 2,
    y: 96,
  },
};

const Navbar = ({ contactFormOpen, setContactFormOpen }) => {
  const classes = useStyles();
  const { width } = useContext(DarkModeContext);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
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

  const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <AccountTreeIcon />,
    <GitHubIcon />,
  ];

  useEffect(() => {
    ['md', 'lg', 'xl'].includes(width) && setDrawerOpen(false);
  }, [width]);

  return (
    <Container id='home'>
      <Hidden smDown>
        {scrollTop >= 300 && (
          <AnchorLink href='#home'>
            <Fab
              aria-label='Change Theme'
              className={classes.backToTop}
              style={{
                background: 'none',
                boxShadow: 'none',
                position: 'fixed',
                top: `${87}%`,
                left: `${1}%`,
                zIndex: '100',
              }}
            >
              <IconButton style={{ backgroundColor: 'none' }}>
                <ExpandLessIcon />
              </IconButton>
            </Fab>
          </AnchorLink>
        )}
        <ThemeToggler x={scrollTop >= 300 || contactFormOpen ? 92 : 87} y={1} />
      </Hidden>
      <Grid
        container
        justify='space-between'
        alignItems='center'
        className={classes.navBar}
        // style={{ border: '1px solid blue' }}
      >
        <Grid item>
          <Typography
            onClick={() => setCurrentPage('home')}
            className={classes.navbarBrand}
          >
            &lt;<span className={classes.brandName}>Austin Adam</span> /&gt;
          </Typography>
        </Grid>
        <Hidden mdUp>
          <Drawer
            anchor={'right'}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <div
              role='presentation'
              onClick={() => setDrawerOpen(false)}
              onKeyDown={() => setDrawerOpen(false)}
            >
              <Grid
                container
                justify='space-between'
                alignItems='center'
                style={{ padding: '1rem 0 0 0.25rem' }}
              >
                <Grid item>
                  <ThemeToggler inMenu />
                </Grid>
                <Grid item>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <List>
                {['Home', 'About', 'Projects', 'GitHub'].map((text, index) => (
                  <AnchorLink
                    href={`#${text.toLowerCase()}`}
                    className={`${classes.menuLink} ${
                      currentPage === text.toLowerCase()
                        ? classes.menuLinkActive
                        : null
                    }`}
                  >
                    <ListItem button key={text}>
                      <ListItemIcon>{icons[index]}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </AnchorLink>
                ))}
                <Divider />
                <ListItem key={100} style={{ marginTop: '1rem' }}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => setContactFormOpen(true)}
                    className={classes.contactButton}
                  >
                    Contact Me
                  </Button>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Grid item xs={7}>
            <Grid container justify='flex-end' alignItems='center'>
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
        </Hidden>
        <Hidden mdUp>
          <Grid item>
            <IconButton
              color='primary'
              onClick={() => setDrawerOpen((st) => !st)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Navbar;

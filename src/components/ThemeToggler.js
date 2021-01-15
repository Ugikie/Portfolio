import React, { useState, useContext } from 'react';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { DarkModeContext } from '../contexts/DarkModeContext';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  themeToggler: {
    // marginLeft: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
    transform: 'rotate(0deg)',
    transition: 'top 300ms ease',
  },
  togglerLight: {
    color: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[800],
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
    },
  },
  togglerDark: {
    backgroundColor: theme.palette.grey[300],
    '&:hover': {
      backgroundColor: '#d5d5d5',
    },
  },
  darkMode: {
    transform: 'rotate(-90deg)',
    // backgroundColor: 'red',
    transition: 'transform 200ms ease',
  },
  stupidIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hovering: {
    transform: 'rotate(0deg)',
    // backgroundColor: 'red',
    transition: 'transform 200ms ease',
  },
  lightMode: {
    transform: 'rotate(90deg)',
    // backgroundColor: 'red',
    transition: 'transform 200ms ease',
  },
}));

const ThemeToggler = ({ inMenu = false, x, y }) => {
  const classes = useStyles();
  const [hovering, setHovering] = useState(false);
  const { theme, toggleDarkMode } = useContext(DarkModeContext);
  const { prefersDarkMode } = theme.palette;
  const changeTheme = () => {
    toggleDarkMode();
  };
  const styles = inMenu
    ? {}
    : {
        position: 'fixed',
        top: `${x}%`,
        left: `${y}%`,
        zIndex: '100',
      };
  return (
    <Fab
      aria-label='Change Theme'
      onClick={changeTheme}
      className={`${classes.themeToggler} ${
        prefersDarkMode ? classes.togglerDark : classes.togglerLight
      }`}
      style={styles}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!hovering ? (
        <span className={`${classes.hovering} ${classes.stupidIconContainer}`}>
          <Brightness6Icon />
        </span>
      ) : prefersDarkMode ? (
        <span className={`${classes.darkMode} ${classes.stupidIconContainer}`}>
          <Brightness5Icon />
        </span>
      ) : (
        <span className={`${classes.lightMode} ${classes.stupidIconContainer}`}>
          <Brightness7Icon />
        </span>
      )}
    </Fab>
  );
};

export default ThemeToggler;

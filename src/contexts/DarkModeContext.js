import React, { createContext, useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth from '@material-ui/core/withWidth';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useToggleState from '../hooks/useToggleState';
import PropTypes from 'prop-types';

export const DarkModeContext = createContext();

const Provider = (props) => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, toggleDarkMode] = useToggleState();
  const { width } = props;

  const prefersDarkMode = isDarkMode;

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          // fontFamily: ['"Source Sans Pro", sans-serif'].join(','),
          fontFamily: ['"Titillium Web", sans-serif'].join(','),
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          background: {
            darker: prefersDarkMode ? '#212121' : '#c0c0ca',
          },
          primary: {
            main: '#536dfe',
          },
          prefersDarkMode,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ width, theme, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

Provider.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

const DarkModeProvider = withWidth()(Provider);

export { DarkModeProvider };

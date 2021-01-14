import React, { createContext, useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useToggleState from '../hooks/useToggleState';

export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, toggleDarkMode] = useToggleState();

  const prefersDarkMode = isDarkMode;

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ['"Source Sans Pro", sans-serif'].join(','),
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
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

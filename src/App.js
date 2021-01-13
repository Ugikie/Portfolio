import { useMemo } from 'react';
import Portfolio from './components/Portfolio';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';
import Footer from './components/Footer';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ['"Source Sans Pro", sans-serif'].join(','),
        },
        palette: {
          type: prefersDarkMode ? 'light' : 'light',
          background: {
            darker: prefersDarkMode ? '#212121' : '#c0c0ca',
          },
          primary: {
            main: '#536dfe',
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
      <AboutMe />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

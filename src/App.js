import { DarkModeProvider } from './contexts/DarkModeContext';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <Portfolio />
    </DarkModeProvider>
  );
}

export default App;

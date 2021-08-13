import { useContext } from 'react';
import './App.css';
import { getStyles, ThemeContext } from './context/GlobalContext';
import Home from './pages/Home';

function App() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
    <div className="App" style={{ ...styles.background, ...styles.text }}>
      <Home stylesMode={styles} />

      {/* <Search /> */}
    </div>
  );
}

export default App;

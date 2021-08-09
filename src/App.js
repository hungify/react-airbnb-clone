import { useContext, useState } from 'react';
import './App.css';
import { ThemeContext, getStyles } from './context/GlobalContext';
import Home from './pages/Home';
import Search from './pages/Search';

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

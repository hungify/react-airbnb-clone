import { useContext, useState } from 'react';
import './App.css';
import { ThemeContext } from './context/GlobalContext';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  const theme = useContext(ThemeContext);
  const [stateTheme, setStateTheme] = useState(theme.light);
  const darkMode = () => {
    setStateTheme(theme.dark);
  };
  const lightMode = () => {
    setStateTheme(theme.light);
  };

  const handleChangeMode = () => {};

  return (
    <div className="App" style={{ backgroundColor: stateTheme }}>
      <Home onClickMode={handleChangeMode} />
      {/* <Search /> */}
    </div>
  );
}

export default App;

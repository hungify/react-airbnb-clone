import { createContext, useState } from 'react';

const themes = {
  light: {
    fillColor: '#2e2e48',
    color: '#000',
    backgroundColor: '#fafafc',
  },
  dark: {
    fillColor: '#fafafc',
    color: '#FAEBE0',
    backgroundColor: '#1e1e38',
    boxShadow: ' 0 0 0 2px #002',
  },
};

export const getStyles = (mode) => ({
  background: {
    backgroundColor: themes[mode].backgroundColor,
  },
  text: {
    color: themes[mode].color,
  },
  boxShadow: {
    boxShadow: themes['dark'].boxShadow,
  },
  fillColor: {
    fill: themes[mode].fillColor,
  },
});

export const ThemeContext = createContext(themes);

function GlobalProvider(props) {
  const [mode, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{ mode, setTheme: () => setTheme(mode === 'dark' ? 'light' : 'dark') }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
export default GlobalProvider;

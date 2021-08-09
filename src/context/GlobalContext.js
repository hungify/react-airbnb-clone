import { createContext } from 'react';

const themes = {
  light: {
    foreground: '#000',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#000',
  },
};

export const ThemeContext = createContext(themes);

function GlobalProvider(props) {
  return <ThemeContext.Provider value={{ themes }}>{props.children}</ThemeContext.Provider>;
}
export default GlobalProvider;

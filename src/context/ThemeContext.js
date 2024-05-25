// src/context/ThemeContext.js
import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => dispatch(toggleTheme()) }}>
      {children}
    </ThemeContext.Provider>
  );
};

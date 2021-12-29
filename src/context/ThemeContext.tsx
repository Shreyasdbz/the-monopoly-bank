/** @format */

import React, { useState, createContext } from "react";

import { styles, theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactElement;
};

type ThemeContextType = {
  theme: theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<theme>(styles.light);

  function toggleTheme() {
    if (theme === styles.light) {
      setTheme(styles.dark);
    } else if (theme === styles.dark) {
      setTheme(styles.light);
    }
    console.log("Toggled Theme");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
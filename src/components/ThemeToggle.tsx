/** @format */

import { useContext } from "react";
import { HiOutlineSun, HiMoon } from "react-icons/hi";

import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../context/theme";

const ThemeToggle = () => {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;

  const ToRender = () => {
    if (theme === styles.dark) {
      return <HiMoon className="icon" />;
    } else {
      return <HiOutlineSun className="icon" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        backgroundColor: `${theme.background}`,
        color: `${theme.text}`,
      }}
    >
      <ToRender />
    </button>
  );
};

export default ThemeToggle;

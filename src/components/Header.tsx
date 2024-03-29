/** @format */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div
      className="header"
      style={{
        backgroundColor: `${theme.primary}`,
        boxShadow: `0px 0px 10px 5px ${theme.primary}50`,
      }}
    >
      <span
        className="title"
        style={{
          color: `white`,
        }}
      >
        The Monopoly Bank
      </span>
    </div>
  );
};

export default Header;

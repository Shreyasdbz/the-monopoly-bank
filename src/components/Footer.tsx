/** @format */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className="footer">
      <a
        href="https://github.com/Shreyasdbz/the-monopoly-bank"
        className="footer"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: `${theme.inputBg}`,
          color: `${theme.greyText}`,
        }}
      >
        Github
      </a>
    </div>
  );
};

export default Footer;

/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const StartingBalance = () => {
  const theme = useContext(ThemeContext).theme;

  return (
    <div className="starting-balance">
      <div
        className="heading"
        style={{
          color: `${theme.text}95`,
        }}
      >
        Enter a balance to start with:
      </div>
      <input
        type="text"
        className="input"
        style={{
          backgroundColor: `${theme.inputBg}`,
          boxShadow: `0px 0px 10px 5px ${theme.inputBg}80`,
        }}
      />
    </div>
  );
};

export default StartingBalance;

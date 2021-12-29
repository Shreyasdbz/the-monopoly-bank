/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const StartGameButton = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <button
      className="start-game-btn"
      style={{
        backgroundColor: `${theme.primary}`,
        boxShadow: `0px 0px 15px 5px ${theme.primary}50`,
      }}
    >
      Start the Game
    </button>
  );
};

export default StartGameButton;

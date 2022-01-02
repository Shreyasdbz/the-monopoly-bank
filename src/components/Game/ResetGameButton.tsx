/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayersContext } from "../../context/PlayersContext";

const ResetGameButton = () => {
  const theme = useContext(ThemeContext).theme;
  const resetList = useContext(PlayersContext).resetList;

  function handleReset() {
    resetList();
  }

  return (
    <Link to="/">
      <button
        className="reset-game-btn"
        style={{
          backgroundColor: `${theme.danger}`,
          boxShadow: `0px 0px 15px 5px ${theme.danger}20`,
        }}
        onClick={handleReset}
      >
        Reset Game
      </button>
    </Link>
  );
};

export default ResetGameButton;

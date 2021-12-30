/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

type StartGameButtonProps = {
  startGame: () => void;
};

const StartGameButton = ({ startGame }: StartGameButtonProps) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <Link to="/game">
      <button
        className="start-game-btn"
        style={{
          backgroundColor: `${theme.primary}`,
          boxShadow: `0px 0px 15px 5px ${theme.primary}50`,
        }}
        onClick={startGame}
      >
        Start the Game
      </button>
    </Link>
  );
};

export default StartGameButton;

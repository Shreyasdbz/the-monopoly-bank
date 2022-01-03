/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { ResetModalActionTypes } from "../../interfaces/game";

type ResetGameButtonProps = {
  handleResetButton: (action: ResetModalActionTypes) => void;
};

const ResetGameButton = ({ handleResetButton }: ResetGameButtonProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <button
      className="reset-game-btn"
      style={{
        backgroundColor: `${theme.danger}`,
        boxShadow: `0px 0px 15px 5px ${theme.danger}20`,
      }}
      onClick={() => {
        handleResetButton("OPEN");
      }}
    >
      Reset Game
    </button>
  );
};

export default ResetGameButton;

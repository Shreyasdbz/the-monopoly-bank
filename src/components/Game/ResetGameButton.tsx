/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { ResetModalActionTypes } from "../../interfaces/game";

type ResetGameButtonProps = {
  handleReset: (action: ResetModalActionTypes) => void;
};

const ResetGameButton = ({ handleReset }: ResetGameButtonProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <button
      className="reset-game-btn"
      style={{
        backgroundColor: `${theme.danger}`,
        boxShadow: `0px 0px 15px 5px ${theme.danger}20`,
      }}
      onClick={() => {
        handleReset("OPEN");
      }}
    >
      Reset Game
    </button>
  );
};

export default ResetGameButton;

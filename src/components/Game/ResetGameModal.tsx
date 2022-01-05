/** @format */
import { useContext } from "react";
import { Link } from "react-router-dom";

import { ResetModalActionTypes } from "../../interfaces/game";
import { ThemeContext } from "../../context/ThemeContext";

type ResetGameModalProps = {
  handleReset: (action: ResetModalActionTypes) => void;
};

const ResetGameModal = ({ handleReset }: ResetGameModalProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <div className="reset-game-modal">
      <div className="label">Are you sure you want to reset the game?</div>
      <div className="actions">
        <button
          className="btn cancel"
          style={{
            backgroundColor: `${theme.success}`,
            boxShadow: `0px 0px 15px 5px ${theme.success}20`,
          }}
          onClick={() => {
            handleReset("CANCEL");
          }}
        >
          CANCEL
        </button>
        <Link to="/">
          <button
            className="btn confirm"
            style={{
              backgroundColor: `${theme.danger}`,
              boxShadow: `0px 0px 15px 5px ${theme.danger}20`,
            }}
            onClick={() => {
              handleReset("CONFIRM");
            }}
          >
            CONFIRM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResetGameModal;

/** @format */
import { Link } from "react-router-dom";

import { ResetModalActionTypes } from "../../interfaces/game";

type ResetGameModalProps = {
  handleResetButton: (action: ResetModalActionTypes) => void;
};

const ResetGameModal = ({ handleResetButton }: ResetGameModalProps) => {
  return (
    <div className="reset-game-modal">
      <div className="label">Are you sure you want to reset the game?</div>
      <div className="actions">
        <button
          className="cancel"
          onClick={() => {
            handleResetButton("CANCEL");
          }}
        >
          CANCEL
        </button>
        <Link to="/">
          <button
            className="confirm"
            onClick={() => {
              handleResetButton("CONFIRM");
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

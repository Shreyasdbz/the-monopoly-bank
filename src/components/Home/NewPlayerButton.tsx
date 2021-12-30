/** @format */
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

type NewPlayerButtonProps = {
  addPlayer: () => void;
};

const NewPlayerButton = ({ addPlayer }: NewPlayerButtonProps) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <button
      className="new-player-btn"
      style={{
        backgroundColor: `${theme.secondary}`,
        boxShadow: `0px 0px 15px 5px ${theme.secondary}50`,
      }}
      onClick={addPlayer}
    >
      Add Player
    </button>
  );
};

export default NewPlayerButton;

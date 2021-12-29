/** @format */
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const NewPlayerButton = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <button
      className="new-player-btn"
      style={{
        backgroundColor: `${theme.secondary}`,
        boxShadow: `0px 0px 15px 5px ${theme.secondary}50`,
      }}
    >
      Add Player
    </button>
  );
};

export default NewPlayerButton;

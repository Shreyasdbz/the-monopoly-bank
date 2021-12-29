/** @format */

import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { PlayersContext } from "../../context/PlayersContext";

const PlayersView = () => {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );

  return (
    <div className="players-view">
      {playerList.map((player) => {
        return (
          <div key={player.id} className="player-box">
            {player.name}
          </div>
        );
      })}
    </div>
  );
};

export default PlayersView;

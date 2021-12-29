/** @format */

import { useContext } from "react";
import { BiTrash } from "react-icons/bi";

import { ThemeContext } from "../../context/ThemeContext";
import { getColorByID } from "../../context/colors";
import { PlayerType } from "../../interfaces/players";

type PlayersViewProps = {
  playerList: PlayerType[];
  removePlayer: (id: string) => void;
};

const PlayersView = ({ playerList, removePlayer }: PlayersViewProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <div
      className="players-view-home"
      style={{
        border: `2px solid ${theme.inputBg}`,
      }}
    >
      {playerList.map((player) => {
        return (
          <div key={player.id} className="player-box">
            <input
              type={"text"}
              defaultValue={player.name}
              className="player-name-input"
              style={{
                backgroundColor: `${getColorByID(player.colorID)}`,
                boxShadow: `0px 0px 15px 0px ${getColorByID(player.colorID)}50`,
              }}
            />
            <button
              className="button"
              style={{ backgroundColor: `${theme.background}` }}
              onClick={() => removePlayer(player.id)}
            >
              <BiTrash
                className="trash-icon"
                style={{
                  color: `${getColorByID(player.colorID)}`,
                }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersView;

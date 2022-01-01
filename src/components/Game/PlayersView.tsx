/** @format */

import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayerType } from "../../interfaces/players";
import { getColorByID } from "../../context/colors";

type PlayersViewProps = {
  playerList: PlayerType[];
};

const PlayersView = ({ playerList }: PlayersViewProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <div className="players-view-game">
      {playerList.map((player) => {
        return (
          <div key={player.id} className="player-box">
            <div
              className="name"
              style={{
                backgroundColor: `${getColorByID(player.colorID)}`,
              }}
            >
              <span>{player.name}</span>
            </div>
            <div className="balance">
              <span
                style={{
                  backgroundColor: `${theme.inputBg}`,
                  color: `${theme.greyTextMain}`,
                }}
              >
                {player.balance}
              </span>
            </div>
            <div className="actions">
              <button
                className="btn"
                style={{
                  backgroundColor: `${getColorByID(player.colorID)}`,
                }}
              >
                <IoAddCircleOutline className="icon" />
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: `${getColorByID(player.colorID)}`,
                }}
              >
                <IoRemoveCircleOutline className="icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersView;

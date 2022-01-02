/** @format */
import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayerType } from "../../interfaces/players";
import { getPlayerColor } from "../../helpers/playerColor";

type PlayersViewLargeProps = {
  playerList: PlayerType[];
};

const PlayersViewLarge = ({ playerList }: PlayersViewLargeProps) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className="players-view-game-large">
      {playerList.map((player) => {
        return (
          <div key={player.id} className="player-box">
            <div
              className="name"
              style={{
                backgroundColor: `${getPlayerColor(player.colorID)}`,
              }}
            >
              <span>{player.name}</span>
            </div>
            <div className="balance">
              <span
                style={{
                  backgroundColor: `${theme.greyBackground}`,
                  color: `${theme.greyText}`,
                }}
              >
                {player.balance}
              </span>
            </div>
            <div className="actions">
              <button
                className="btn"
                style={{
                  backgroundColor: `${getPlayerColor(player.colorID)}`,
                }}
              >
                <IoAddCircleOutline className="icon" />
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: `${getPlayerColor(player.colorID)}`,
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
export default PlayersViewLarge;

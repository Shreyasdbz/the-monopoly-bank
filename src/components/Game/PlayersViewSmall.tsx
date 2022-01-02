/** @format */
import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayerType } from "../../interfaces/players";
import { getPlayerColor } from "../../helpers/playerColor";

type PlayersViewSmallProps = {
  playerList: PlayerType[];
};

const PlayersViewSmall = ({ playerList }: PlayersViewSmallProps) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className="players-view-small">
      {playerList.map((player) => {
        return (
          <div
            key={player.id}
            className="player-box"
            style={{
              backgroundColor: `${getPlayerColor(player.colorID)}`,
              boxShadow: `0px 0px 15px 5px ${getPlayerColor(player.colorID)}50`,
            }}
          >
            <div className="name">{player.name}</div>
            <div
              className="balance"
              style={{
                backgroundColor: `${theme.greyBackground}`,
              }}
            >
              {player.balance}
            </div>
            <div className="actions">
              <button className="btn">
                <IoRemoveCircleOutline
                  className="icon sub"
                  style={{
                    backgroundColor: `${theme.warning}`,
                  }}
                />
                <span className="text">SUB</span>
              </button>
              <button className="btn">
                <IoAddCircleOutline
                  className="icon add"
                  style={{
                    backgroundColor: `${theme.success}`,
                  }}
                />
                <span className="text">ADD</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PlayersViewSmall;

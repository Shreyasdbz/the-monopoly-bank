/** @format */
import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayerType } from "../../interfaces/players";
import { TransactionActionType } from "../../interfaces/game";
import { getPlayerColor } from "../../helpers/playerColor";

type PlayersViewLargeProps = {
  playerList: PlayerType[];
  handleTransaction: (payload: TransactionActionType) => void;
};

const PlayersViewLarge = ({
  playerList,
  handleTransaction,
}: PlayersViewLargeProps) => {
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
                boxShadow: `0px 0px 15px 5px ${getPlayerColor(
                  player.colorID
                )}30`,
              }}
            >
              <span>{player.name}</span>
            </div>
            <div className="balance">
              <span
                style={{
                  backgroundColor: `${theme.greyBackground}`,
                  boxShadow: `0px 0px 15px 5px ${theme.greyBackground}50`,
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
                  boxShadow: `0px 0px 15px 5px ${getPlayerColor(
                    player.colorID
                  )}30`,
                }}
                onClick={() => {
                  var payload: TransactionActionType = {
                    action: "OPEN",
                    transactionInformation: {
                      player: player,
                      amount: 0,
                      type: "ADD",
                    },
                  };
                  handleTransaction(payload);
                }}
              >
                <IoAddCircleOutline className="icon" />
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: `${getPlayerColor(player.colorID)}`,
                  boxShadow: `0px 0px 15px 5px ${getPlayerColor(
                    player.colorID
                  )}30`,
                }}
                onClick={() => {
                  var payload: TransactionActionType = {
                    action: "OPEN",
                    transactionInformation: {
                      player: player,
                      amount: 0,
                      type: "SUB",
                    },
                  };
                  handleTransaction(payload);
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

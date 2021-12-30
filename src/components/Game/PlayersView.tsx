/** @format */

import { PlayerType } from "../../interfaces/players";

type PlayersViewProps = {
  playerList: PlayerType[];
};

const PlayersView = ({ playerList }: PlayersViewProps) => {
  return (
    <div className="players-view-game">
      {playerList.map((player) => {
        return (
          <div key={player.id} className="player-box">
            <div className="name">{player.name}</div>
            <div className="balance">{player.balance}</div>
            <div className="actions">
              <button className="btn">ADD</button>
              <button className="btn">SUB</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersView;

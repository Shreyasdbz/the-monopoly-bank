/** @format */

import { PlayerType } from "../../interfaces/players";
import { TransactionActionType } from "../../interfaces/game";
import { getWindowDimensions } from "../../helpers/dimensions";
import PlayersViewSmall from "./PlayersViewSmall";
import PlayersViewLarge from "./PlayersViewLarge";

type PlayersViewProps = {
  playerList: PlayerType[];
  handleTransaction: (payload: TransactionActionType) => void;
};

const PlayersView = ({ playerList, handleTransaction }: PlayersViewProps) => {
  const windowDimensions = getWindowDimensions();

  if (windowDimensions.width < 600) {
    return (
      <PlayersViewSmall
        playerList={playerList}
        handleTransaction={handleTransaction}
      />
    );
  } else {
    return (
      <PlayersViewLarge
        playerList={playerList}
        handleTransaction={handleTransaction}
      />
    );
  }
};

export default PlayersView;

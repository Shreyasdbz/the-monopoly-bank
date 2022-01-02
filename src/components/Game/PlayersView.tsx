/** @format */

import { PlayerType } from "../../interfaces/players";
import { getWindowDimensions } from "../../helpers/dimensions";
import PlayersViewSmall from "./PlayersViewSmall";
import PlayersViewLarge from "./PlayersViewLarge";

type PlayersViewProps = {
  playerList: PlayerType[];
};

const PlayersView = ({ playerList }: PlayersViewProps) => {
  const windowDimensions = getWindowDimensions();

  if (windowDimensions.width < 500) {
    return <PlayersViewSmall playerList={playerList} />;
  } else {
    return <PlayersViewLarge playerList={playerList} />;
  }
};

export default PlayersView;

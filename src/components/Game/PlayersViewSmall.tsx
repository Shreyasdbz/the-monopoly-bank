/** @format */
import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { ThemeContext } from "../../context/ThemeContext";
import { PlayerType } from "../../interfaces/players";
import { getColorByID } from "../../context/colors";

type PlayersViewSmallProps = {
  playerList: PlayerType[];
};

const PlayersViewSmall = ({ playerList }: PlayersViewSmallProps) => {
  return (
    <div className="players-view-large">
      <span>smallll</span>
    </div>
  );
};
export default PlayersViewSmall;

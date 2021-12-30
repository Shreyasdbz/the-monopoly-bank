/** @format */
import { useState, useContext } from "react";

import { PlayersContext } from "../context/PlayersContext";

import Header from "../components/Header";

const Game = () => {
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );

  console.log(playerList);

  return (
    <div className="page-container">
      <Header />
    </div>
  );
};

export default Game;

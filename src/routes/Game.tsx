/** @format */
import { useState, useContext } from "react";

import { PlayersContext } from "../context/PlayersContext";

import Header from "../components/Header";
import PlayersView from "../components/Game/PlayersView";
import ViewTransactionsButton from "../components/Game/ViewTransactionsButton";

const Game = () => {
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );

  return (
    <div className="page-container">
      <Header />
      <PlayersView playerList={playerList} />
      <ViewTransactionsButton />
    </div>
  );
};

export default Game;

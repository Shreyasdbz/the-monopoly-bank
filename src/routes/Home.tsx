/** @format */

import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ThemeContext } from "../context/ThemeContext";
import { PlayersContext } from "../context/PlayersContext";
import { TransactionsContext } from "../context/TransactionsContext";
import { DEFAULT_STARTING_BALANCE } from "../context/constants";
import { PlayerType } from "../interfaces/players";
import { getRandomColorID } from "../helpers/playerColor";

import Header from "../components/Header";
import PlayersView from "../components/Home/PlayersView";
import NewPlayerButton from "../components/Home/NewPlayerButton";
import StartGameButton from "../components/Home/StartGameButton";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import StartingBalance from "../components/Home/StartingBalance";

const Home = () => {
  const theme = useContext(ThemeContext).theme;
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );
  const initiateList = useContext(PlayersContext).initiateList;
  const [startingBalance, setStartingBalance] = useState(
    DEFAULT_STARTING_BALANCE
  );
  const initiateTransactionsList =
    useContext(TransactionsContext).initiateTransactionsList;

  function addPlayer() {
    let uuid = uuidv4();
    var newPlayerName = `Player ${playerList.length + 1}`;
    var new_player_to_add: PlayerType = {
      id: uuid,
      name: newPlayerName,
      balance: 0,
      colorID: getRandomColorID(),
    };
    setPlayerList([...playerList, new_player_to_add]);
  }

  function removePlayer(id: string) {
    let newPlayerList = playerList.filter((player) => player.id !== id);
    setPlayerList(newPlayerList);
  }

  function startGame() {
    initiateList(startingBalance, playerList);
    initiateTransactionsList(startingBalance, playerList);
  }

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: `${theme.background}`,
      }}
    >
      <Header />
      <StartingBalance
        startingBalance={startingBalance}
        setStartingBalance={setStartingBalance}
      />
      <PlayersView playerList={playerList} removePlayer={removePlayer} />
      <NewPlayerButton addPlayer={addPlayer} />
      <StartGameButton startGame={startGame} />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Home;

/** @format */

import { useState, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { PlayersContext } from "../context/PlayersContext";

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
  function addPlayer() {
    //
  }
  function removePlayer(id: string) {
    //
  }

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: `${theme.background}`,
      }}
    >
      <Header />
      <StartingBalance />
      <PlayersView playerList={playerList} removePlayer={removePlayer} />
      <NewPlayerButton />
      <StartGameButton />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Home;

/** @format */
import { useState, useContext } from "react";

import { PlayersContext } from "../context/PlayersContext";

import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import PlayersView from "../components/Game/PlayersView";
import ViewTransactionsButton from "../components/Game/ViewTransactionsButton";
import ResetGameButton from "../components/Game/ResetGameButton";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const Game = () => {
  const theme = useContext(ThemeContext).theme;
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: `${theme.background}`,
      }}
    >
      <Header />
      <PlayersView playerList={playerList} />
      <ViewTransactionsButton />
      <ResetGameButton />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Game;

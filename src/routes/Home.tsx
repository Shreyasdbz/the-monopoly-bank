/** @format */

import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PlayersContext } from "../context/PlayersContext";
import Header from "../components/Header";
import PlayersView from "../components/Home/PlayersView";

const Home = () => {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const [playerList, setPlayerList] = useState(
    useContext(PlayersContext).playerList
  );
  // const initiatePlayerList = useContext(PlayersContext).initiateList;

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: `${theme.background}`,
      }}
    >
      <Header />
      <PlayersView />
    </div>
  );
};

export default Home;

/** @format */
import { useContext, useState } from "react";

import { PlayersContext } from "../context/PlayersContext";

import { ThemeContext } from "../context/ThemeContext";
import { ResetModalActionTypes } from "../interfaces/game";
import Header from "../components/Header";
import PlayersView from "../components/Game/PlayersView";
import ViewTransactionsButton from "../components/Game/ViewTransactionsButton";
import ResetGameButton from "../components/Game/ResetGameButton";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal";
import ResetGameModal from "../components/Game/ResetGameModal";

const Game = () => {
  const theme = useContext(ThemeContext).theme;
  let playerList = useContext(PlayersContext).playerList;
  const [resetModalActive, setResetModalActive] = useState(false);
  const [transactionModalActive, setTransactionModalActive] = useState(false);

  function handleResetButton(action: ResetModalActionTypes) {
    if (action === "OPEN") {
      setResetModalActive(true);
      //
    } else if (action === "CANCEL") {
      setResetModalActive(false);
      //
    } else if (action === "CONFIRM") {
      setResetModalActive(false);
      //
    }
  }

  function handleTransaction() {
    //
  }

  return (
    <div className="container">
      <div
        className={`page-container ${
          resetModalActive || transactionModalActive ? "page-blur" : ""
        }`}
        style={{
          backgroundColor: `${theme.background}`,
        }}
      >
        <Header />
        <PlayersView playerList={playerList} />
        <ViewTransactionsButton />
        <ResetGameButton handleResetButton={handleResetButton} />
        <Footer />
        <ThemeToggle />
      </div>
      {resetModalActive ? (
        <Modal>
          <ResetGameModal handleResetButton={handleResetButton} />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;

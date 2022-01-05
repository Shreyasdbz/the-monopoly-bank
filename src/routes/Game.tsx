/** @format */
import { useContext, useState } from "react";

import { PlayersContext } from "../context/PlayersContext";
import { ThemeContext } from "../context/ThemeContext";
import {
  ResetModalActionTypes,
  TransactionActionType,
  CurrentPlayerTransactionType,
} from "../interfaces/game";

import Header from "../components/Header";
import PlayersView from "../components/Game/PlayersView";
import ViewTransactionsButton from "../components/Game/ViewTransactionsButton";
import ResetGameButton from "../components/Game/ResetGameButton";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal";
import ResetGameModal from "../components/Game/ResetGameModal";
import TransactionModal from "../components/Game/TransactionModal";

const Game = () => {
  const theme = useContext(ThemeContext).theme;
  const playerList = useContext(PlayersContext).playerList;
  const updateList = useContext(PlayersContext).updateList;
  const [resetModalActive, setResetModalActive] = useState(false);
  const [transactionModalActive, setTransactionModalActive] = useState(false);
  const [currentPlayerTransaction, setCurrentPlayerTransaction] =
    useState<CurrentPlayerTransactionType | null>(null);

  function handleReset(action: ResetModalActionTypes) {
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

  function handleTransaction(payload: TransactionActionType) {
    if (payload.action === "OPEN") {
      setTransactionModalActive(true);
      setCurrentPlayerTransaction(payload.transactionInformation);
    } else if (payload.action === "CANCEL") {
      setTransactionModalActive(false);
      setCurrentPlayerTransaction(null);
    } else if (payload.action === "CONFIRM") {
      if (payload.transactionInformation.type === "ADD") {
        for (let player of playerList) {
          if (player.id === payload.transactionInformation.player.id) {
            player.balance += payload.transactionInformation.amount;
          }
        }
      } else if (payload.transactionInformation.type === "SUB") {
        for (let player of playerList) {
          if (player.id === payload.transactionInformation.player.id) {
            player.balance -= payload.transactionInformation.amount;
          }
        }
      }
      updateList(playerList);
      setTransactionModalActive(false);
      setCurrentPlayerTransaction(null);
    }
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
        <PlayersView
          playerList={playerList}
          handleTransaction={handleTransaction}
        />
        <ViewTransactionsButton />
        <ResetGameButton handleReset={handleReset} />
        <Footer />
        <ThemeToggle />
      </div>
      {resetModalActive ? (
        <Modal>
          <ResetGameModal handleReset={handleReset} />
        </Modal>
      ) : (
        <></>
      )}
      {transactionModalActive && currentPlayerTransaction ? (
        <Modal>
          <TransactionModal
            currentPlayerTransaction={currentPlayerTransaction}
            handleTransaction={handleTransaction}
          />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;

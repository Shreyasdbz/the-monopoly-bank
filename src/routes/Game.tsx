/** @format */
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PlayersContext } from "../context/PlayersContext";
import { ThemeContext } from "../context/ThemeContext";
import { TransactionsContext } from "../context/TransactionsContext";
import {
  ResetModalActionTypes,
  TransactionActionType,
  CurrentPlayerTransactionType,
} from "../interfaces/game";
import {
  TransactionHistoryModalType,
  TransactionType,
} from "../interfaces/transactions";

import Header from "../components/Header";
import PlayersView from "../components/Game/PlayersView";
import ViewTransactionsButton from "../components/Game/ViewTransactionsButton";
import ResetGameButton from "../components/Game/ResetGameButton";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal";
import ResetGameModal from "../components/Game/ResetGameModal";
import TransactionModal from "../components/Game/TransactionModal";
import TransactionsHistoryModal from "../components/Game/TransactionsHistoryModal";

const Game = () => {
  const theme = useContext(ThemeContext).theme;
  const playerList = useContext(PlayersContext).playerList;
  const updateList = useContext(PlayersContext).updateList;
  const [currentPlayerTransaction, setCurrentPlayerTransaction] =
    useState<CurrentPlayerTransactionType | null>(null);
  const appendTransaction = useContext(TransactionsContext).appendTransaction;
  // Modals
  const [resetModalActive, setResetModalActive] = useState(false);
  const [transactionModalActive, setTransactionModalActive] = useState(false);
  const [transactionsHistoryModalActive, setTransactionsHistoryModalActive] =
    useState(false);

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

  function handleTransactionHistory(action: TransactionHistoryModalType) {
    if (action === "OPEN") setTransactionsHistoryModalActive(true);
    else if (action === "CLOSE") setTransactionsHistoryModalActive(false);
  }

  function handleTransaction(payload: TransactionActionType) {
    if (payload.action === "OPEN") {
      setTransactionModalActive(true);
      setCurrentPlayerTransaction(payload.transactionInformation);
    } else if (payload.action === "CANCEL") {
      setTransactionModalActive(false);
      setCurrentPlayerTransaction(null);
    } else if (payload.action === "CONFIRM") {
      //TODO: ERROR CHECK
      let pass = true;
      if (pass === true) {
        if (payload.transactionInformation.type === "ADD") {
          for (let player of playerList) {
            if (player.id === payload.transactionInformation.player.id) {
              player.balance += payload.transactionInformation.amount;
              let transaction: TransactionType = {
                id: uuidv4(),
                player: player,
                type: "ADD",
                amount: payload.transactionInformation.amount,
              };
              appendTransaction(transaction);
            }
          }
        } else if (payload.transactionInformation.type === "SUB") {
          for (let player of playerList) {
            if (player.id === payload.transactionInformation.player.id) {
              player.balance -= payload.transactionInformation.amount;
              let transaction: TransactionType = {
                id: uuidv4(),
                player: player,
                type: "SUB",
                amount: payload.transactionInformation.amount,
              };
              appendTransaction(transaction);
            }
          }
        }
        updateList(playerList);
        setTransactionModalActive(false);
        setCurrentPlayerTransaction(null);
      }
    }
  }

  return (
    <div className="container">
      <div
        className={`page-container ${
          resetModalActive ||
          transactionModalActive ||
          transactionsHistoryModalActive
            ? "page-blur"
            : ""
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
        <ViewTransactionsButton
          handleTransactionHistory={handleTransactionHistory}
        />
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
      {transactionsHistoryModalActive ? (
        <Modal>
          <TransactionsHistoryModal
            handleTransactionHistory={handleTransactionHistory}
          />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;

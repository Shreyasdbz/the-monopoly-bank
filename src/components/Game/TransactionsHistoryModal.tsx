/** @format */
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { TransactionsContext } from "../../context/TransactionsContext";
import { getPlayerColor } from "../../helpers/playerColor";
import {
  TransactionHistoryModalType,
  TransactionType,
} from "../../interfaces/transactions";

type TransactionsHistoryModalType = {
  handleTransactionHistory: (action: TransactionHistoryModalType) => void;
};

const TransactionHistoryType = ({ type }: TransactionType) => {
  if (type === "INIT") {
    return <span> started with </span>;
  } else if (type === "ADD") {
    return <span> added </span>;
  } else if (type === "SUB") {
    return <span> subtracted </span>;
  }

  return <span> action </span>;
};

const TransactionsHistoryModal = ({
  handleTransactionHistory,
}: TransactionsHistoryModalType) => {
  const theme = useContext(ThemeContext).theme;
  const transactionsList = useContext(TransactionsContext).transactionsList;

  return (
    <div className="transactions-history-modal">
      <div className="label">Transactions History</div>
      <ul
        className="transactions-list"
        style={{
          backgroundColor: `${theme.greyBackground}`,
          boxShadow: `0px 0px 15px 5px${theme.greyBackground}90`,
        }}
      >
        {transactionsList.map((transaction) => {
          return (
            <li className="transaction-line" key={transaction.id}>
              <span
                className="player"
                style={{
                  backgroundColor: `${getPlayerColor(
                    transaction.player.colorID
                  )}`,
                }}
              >
                {transaction.player.name}
              </span>
              <span
                className="action"
                style={{
                  color: `${theme.greyText}`,
                }}
              >
                <TransactionHistoryType
                  id={transaction.id}
                  player={transaction.player}
                  type={transaction.type}
                  amount={transaction.amount}
                />
              </span>
              <span className="amount">${transaction.amount}</span>
            </li>
          );
        })}
      </ul>
      <button
        className="btn"
        style={{
          backgroundColor: `${theme.tertiary}`,
          boxShadow: `0px 0px 15px 5px${theme.tertiary}30`,
        }}
        onClick={() => {
          handleTransactionHistory("CLOSE");
        }}
      >
        Close
      </button>
    </div>
  );
};

export default TransactionsHistoryModal;

/** @format */
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { TransactionsContext } from "../../context/TransactionsContext";
import {
  TransactionHistoryModalType,
  TransactionType,
} from "../../interfaces/transactions";

type TransactionsHistoryModalType = {
  handleTransactionHistory: (action: TransactionHistoryModalType) => void;
};

const TransactionLine = ({ id, player, type, amount }: TransactionType) => {
  return (
    <li className="transaction-line">
      <span className="normal">
        {player.name} {type} {amount}
      </span>
    </li>
  );
};

const TransactionsHistoryModal = ({
  handleTransactionHistory,
}: TransactionsHistoryModalType) => {
  const transactionsList = useContext(TransactionsContext).transactionsList;
  console.log(transactionsList);

  return (
    <div className="transactions-history-modal">
      <div className="label">Transactions History</div>
      <ul className="transactions-list">
        {transactionsList.map((transaction) => {
          <TransactionLine
            key={transaction.id}
            id={transaction.id}
            player={transaction.player}
            type={transaction.type}
            amount={transaction.amount}
          />;
        })}
      </ul>
      <button
        className="btn"
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

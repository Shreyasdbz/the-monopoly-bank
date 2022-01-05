/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { TransactionHistoryModalType } from "../../interfaces/transactions";

type ViewTransactionsButtonProps = {
  handleTransactionHistory: (action: TransactionHistoryModalType) => void;
};

const ViewTransactionsButton = ({
  handleTransactionHistory,
}: ViewTransactionsButtonProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <button
      className="view-transactions-btn"
      style={{
        backgroundColor: `${theme.secondary}`,
        boxShadow: `0px 0px 15px 5px ${theme.secondary}50`,
      }}
      onClick={() => handleTransactionHistory("OPEN")}
    >
      View Transactions
    </button>
  );
};

export default ViewTransactionsButton;

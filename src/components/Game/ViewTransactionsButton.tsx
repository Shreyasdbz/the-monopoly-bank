/** @format */

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const ViewTransactionsButton = () => {
  const theme = useContext(ThemeContext).theme;

  return (
    <button
      className="view-transactions-btn"
      style={{
        backgroundColor: `${theme.secondary}`,
        boxShadow: `0px 0px 15px 5px ${theme.secondary}50`,
      }}
    >
      View Transactions
    </button>
  );
};

export default ViewTransactionsButton;

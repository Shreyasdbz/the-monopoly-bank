/** @format */

import { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import {
  TransactionActionType,
  CurrentPlayerTransactionType,
} from "../../interfaces/game";

type TransactionModalProps = {
  currentPlayerTransaction: CurrentPlayerTransactionType;
  handleTransaction: (payload: TransactionActionType) => void;
};

const TransactionModal = ({
  currentPlayerTransaction,
  handleTransaction,
}: TransactionModalProps) => {
  const theme = useContext(ThemeContext).theme;
  const [amount, setAmount] = useState<number>(200);

  return (
    <div className="transaction-modal">
      <div className="label">Label</div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={(e) => {
          setAmount(parseFloat(e.target.value));
        }}
      />
      <div className="actions">
        <button
          className="btn"
          onClick={() => {
            handleTransaction({
              action: "CANCEL",
            });
          }}
        >
          CANCEL
        </button>
        <button
          className="btn"
          onClick={() => {
            var payload: TransactionActionType = {
              action: "CONFIRM",
              transactionInformation: {
                player: currentPlayerTransaction.player,
                amount: amount,
                type: currentPlayerTransaction.type,
              },
            };
            handleTransaction(payload);
          }}
        >
          {currentPlayerTransaction?.type}
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;

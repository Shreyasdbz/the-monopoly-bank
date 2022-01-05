/** @format */

import { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { getPlayerColor } from "../../helpers/playerColor";
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
      <div className="label">
        <span className="normal">Enter an amount to </span>
        <span className="action">{currentPlayerTransaction.type}</span>
        <span className="normal"> for </span>
        <span
          className="player"
          style={{
            backgroundColor: `${getPlayerColor(
              currentPlayerTransaction.player.colorID
            )}`,
          }}
        >
          {currentPlayerTransaction.player.name}
        </span>
      </div>
      <input
        type="number"
        className="input"
        style={{
          backgroundColor: `${theme.greyBackground}`,
          color: `${theme.greyText}`,
        }}
        value={amount}
        onChange={(e) => {
          setAmount(parseFloat(e.target.value));
        }}
      />
      <div className="actions">
        <button
          className="btn"
          style={{
            backgroundColor: `${theme.danger}`,
            boxShadow: `0px 0px 15px 5px ${theme.danger}20`,
          }}
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
          style={{
            backgroundColor: `${
              currentPlayerTransaction.type === "ADD"
                ? theme.success
                : theme.warning
            }`,
            boxShadow: `0px 0px 15px 5px ${
              currentPlayerTransaction.type === "ADD"
                ? theme.success
                : theme.warning
            }30`,
          }}
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

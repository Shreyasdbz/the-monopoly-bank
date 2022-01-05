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
      <div
        className="label"
        style={{
          color: `${theme.text}`,
        }}
      >
        <span className="normal">
          Enter an amount to {currentPlayerTransaction.type.toLowerCase()}
        </span>
        <span className="normal"> for </span>
        <div className="player">
          <span
            className="name"
            style={{
              color: `${getPlayerColor(
                currentPlayerTransaction.player.colorID
              )}`,
              border: `3px solid ${getPlayerColor(
                currentPlayerTransaction.player.colorID
              )}80`,
              boxShadow: `0px 0px 15px 5px ${getPlayerColor(
                currentPlayerTransaction.player.colorID
              )}20`,
            }}
          >
            {currentPlayerTransaction.player.name}
          </span>
        </div>
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

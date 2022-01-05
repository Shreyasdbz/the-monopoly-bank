/** @format */

import { PlayerType } from "./players";

export type ResetModalActionTypes = "OPEN" | "CANCEL" | "CONFIRM";

export type CurrentPlayerTransactionType = {
  player: PlayerType;
  amount: number;
  type: "ADD" | "SUB";
};

type TransactionActionOpenType = {
  action: "OPEN";
  transactionInformation: CurrentPlayerTransactionType;
};

type TransactionActionCancelType = {
  action: "CANCEL";
};

type TransactionActionConfirmType = {
  action: "CONFIRM";
  transactionInformation: CurrentPlayerTransactionType;
};

export type TransactionActionType =
  | TransactionActionOpenType
  | TransactionActionCancelType
  | TransactionActionConfirmType;

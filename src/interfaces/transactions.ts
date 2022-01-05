/** @format */

import { PlayerType } from "./players";

export type TransactionType = {
  id: string;
  player: PlayerType;
  type: "INIT" | "ADD" | "SUB";
  amount: number;
};

export type TransactionHistoryModalType = "OPEN" | "CLOSE";

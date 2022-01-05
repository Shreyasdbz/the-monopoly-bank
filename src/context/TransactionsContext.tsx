/** @format */

import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlayerType } from "../interfaces/players";
import { TransactionType } from "../interfaces/transactions";

const initialTransactionData: TransactionType[] = [];

type TransactionsContextProviderProps = {
  children: React.ReactElement;
};

type TransactionsContextType = {
  transactionsList: TransactionType[];
  initiateTransactionsList: (
    startingBalance: number,
    playerList: PlayerType[]
  ) => void;
  appendTransaction: (transaction: TransactionType) => void;
  resetTransactionList: () => void;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsContextProvider = ({
  children,
}: TransactionsContextProviderProps) => {
  const [transactionsList, setTransactionsList] = useState<TransactionType[]>(
    initialTransactionData
  );

  function initiateTransactionsList(
    startingBalance: number,
    playerList: PlayerType[]
  ) {
    let tempTransactionsList: TransactionType[] = transactionsList;
    for (let player of playerList) {
      let transaction: TransactionType = {
        id: uuidv4(),
        player: player,
        type: "INIT",
        amount: startingBalance,
      };
      tempTransactionsList.push(transaction);
    }
    setTransactionsList(tempTransactionsList);
  }

  function appendTransaction(transaction: TransactionType) {
    let tempTransactionsList: TransactionType[] = transactionsList;
    tempTransactionsList.push(transaction);
    setTransactionsList(tempTransactionsList);
  }

  function resetTransactionList() {
    setTransactionsList([]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactionsList,
        initiateTransactionsList,
        appendTransaction,
        resetTransactionList,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

/** @format */
import React, { useState, createContext } from "react";

import { PlayerType } from "../interfaces/players";

const initialPlayerData: PlayerType[] = [
  {
    id: "aaa001",
    name: "Player 1",
    balance: 0,
    colorID: 1,
  },
  {
    id: "aaa002",
    name: "Player 2",
    balance: 0,
    colorID: 9,
  },
  {
    id: "aaa003",
    name: "Player 3",
    balance: 0,
    colorID: 7,
  },
];

type PlayersContextProviderProps = {
  children: React.ReactElement;
};

type PlayersContextType = {
  playerList: PlayerType[];
  initiateList: (balance: number, newPlayerList: PlayerType[]) => void;
  updateList: (newPlayerList: PlayerType[]) => void;
  resetList: () => void;
};

export const PlayersContext = createContext({} as PlayersContextType);

export const PlayersContextProvider = ({
  children,
}: PlayersContextProviderProps) => {
  const [playerList, setPlayerList] = useState<PlayerType[]>(initialPlayerData);

  function initiateList(balance: number, newPlayerList: PlayerType[]) {
    var tempPlayerList = newPlayerList;
    for (let player of tempPlayerList) {
      player.balance = balance;
    }
    setPlayerList(tempPlayerList);
  }

  function updateList(newPlayerList: PlayerType[]) {
    setPlayerList(newPlayerList);
  }

  function resetList() {
    setPlayerList(initialPlayerData);
  }

  return (
    <PlayersContext.Provider
      value={{ playerList, initiateList, updateList, resetList }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

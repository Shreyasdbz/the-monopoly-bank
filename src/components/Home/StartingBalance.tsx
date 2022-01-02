/** @format */

import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

type StartingBalanceProps = {
  startingBalance: number;
  setStartingBalance: React.Dispatch<React.SetStateAction<number>>;
};

const StartingBalance = ({
  startingBalance,
  setStartingBalance,
}: StartingBalanceProps) => {
  const theme = useContext(ThemeContext).theme;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(e: string) {
    try {
      let balance = parseFloat(e);
      setStartingBalance(balance);
    } catch (error) {
      setTimeout(() => {
        setErrorMessage("Invalid balance");
      }, 1000);
    }
  }

  return (
    <div className="starting-balance">
      <div
        className="heading"
        style={{
          color: `${theme.text}80`,
        }}
      >
        Starting Balance:
      </div>
      <input
        type="number"
        className="input"
        defaultValue={startingBalance.toString()}
        onChange={(e) => handleChange(e.target.value)}
        style={{
          backgroundColor: `${theme.greyBackground}`,
          boxShadow: `0px 0px 10px 5px ${theme.greyBackground}80`,
          color: `${theme.greyText}`,
        }}
      />
      {errorMessage && (
        <div
          className="error"
          style={{
            color: `${theme.danger}`,
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default StartingBalance;

/** @format */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ColorBoxProps = {
  displayColor: string;
  label: string;
};

const ColorBox = ({ displayColor, label }: ColorBoxProps) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div
      className="color-box"
      style={{
        border: `3px solid ${theme.greyBackground}`,
      }}
    >
      <div
        className="color-patch"
        style={{
          backgroundColor: `${displayColor}`,
          boxShadow: `0px 0px 15px 5px ${displayColor}50`,
        }}
      />
      <div
        className="color-label"
        style={{
          color: `${theme.text}`,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default ColorBox;

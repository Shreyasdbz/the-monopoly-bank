/** @format */

import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

type ModalProps = {
  children: React.ReactElement;
};

const Modal = ({ children }: ModalProps) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <div className="modal">
      <div
        className="box"
        style={{
          backgroundColor: `${theme.background}`,
          boxShadow: `0px 0px 15px 5px ${theme.text}20`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;

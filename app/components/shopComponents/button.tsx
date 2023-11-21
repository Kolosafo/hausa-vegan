"use client";
import React, { FC } from "react";

type Props = {
  text: string;
  onClickHandler?: () => void;
};
const Button: FC<Props> = ({ text, onClickHandler }) => {
  return (
    <button
      className="orangeBgWhiteHover p-3 px-10 rounded-full"
      onClick={() => (onClickHandler ? onClickHandler() : "")}
    >
      {text}
    </button>
  );
};

export default Button;

import React, { MouseEventHandler } from "react";

interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ onClick, text }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-md font-bold bg-emerald-500  hover:bg-emerald-600 px-8 py-2 shadow-sm transition rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;

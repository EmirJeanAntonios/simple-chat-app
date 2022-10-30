import React, { ChangeEventHandler, LegacyRef } from "react";

interface ITextBoxProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
}

const TextBox = React.forwardRef((props: ITextBoxProps, ref:LegacyRef<HTMLInputElement> | undefined) => {
  return (
    <input
      {...props}
      ref={ref}
      type={"text"}
      className="rounded-md border-gray-400 border outline-none px-2 py-2 focus-within:border-emerald-600 transition shadow-sm w-full"
    />
  );
});

export default TextBox;

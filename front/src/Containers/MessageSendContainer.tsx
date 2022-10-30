import React, { ChangeEvent, SyntheticEvent, useRef } from "react";
import socket from "../utils/Socket";
import Button from "../Components/Button";
import TextBox from "../Components/TextBox";

const MessageSendContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current?.value != "" && inputRef.current != null) {
      socket.emit("send_message", {
        message: inputRef.current?.value,
        id: socket.id,
      });

      inputRef.current.value = "";
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex flex-wrap justify-center gap-4 items-center">
      <div className="flex-1">
        <TextBox ref={inputRef} onChange={onChange} placeholder="Mesaj..." />
      </div>
      <div>
        <Button onClick={onClick} text="Gönder" />
      </div>
    </div>
  );
};

export default MessageSendContainer;

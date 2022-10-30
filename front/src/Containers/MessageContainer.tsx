import React, { useEffect, useState } from "react";
import Message from "../Components/Message";
import socket from "../utils/Socket";

interface Message {
  id: string;
  message: string;
}

const MessageContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("recMessage", (message) => {
      setMessages(current => [...current, message]);
    });
  }, []);

  console.log('messages', messages)
  return (
    <div className="flex flex-wrap">
      {messages &&
        messages.map((message,index) => {
          return (
            <Message key={index} isMine={message.id == socket.id}> 
              {message.message}
            </Message>
          );
        })}
    </div>
  );
};

export default MessageContainer;

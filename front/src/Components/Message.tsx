import React from "react";
interface IMessageProps {
  children: React.ReactNode;
  isMine: boolean;
}
const Message = ({ children, isMine }: IMessageProps) => {
  return (
    <div className={`flex ${isMine ? "justify-start" : "justify-end"} grow w-full`}>
      <div
        className={`text-md ${isMine ? "bg-gray-300" : "bg-emerald-400"} mb-4 font-bold rounded-xl shadow-sm inline-block py-1 pr-4 pl-2 self-end`}
      >
        {children}
        <div className="text-xxs font-normal">
            User 1
        </div>
      </div>
    </div>
  );
};

export default Message;

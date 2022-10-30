import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./Components/Button";
import TextBox from "./Components/TextBox";
import MessageContainer from "./Containers/MessageContainer";
import MessageSendContainer from "./Containers/MessageSendContainer";

function App() {
  

  return (
    <div className="container mx-auto py-4 h-screen justify-between flex flex-col">
      <MessageContainer />
      <MessageSendContainer />
    </div>
  );
}

export default App;

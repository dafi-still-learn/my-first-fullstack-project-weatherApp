import { useState } from "react";
import { Outlet } from "react-router-dom";

function ResultChatBot() {
  const [ChatBot, setChatBot] = useState(null);

  return (
    <>
      <Outlet context={{ ChatBot, setChatBot }} />
    </>
  );
}

export default ResultChatBot;

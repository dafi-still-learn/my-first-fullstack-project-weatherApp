import { postChatAI } from "../services/postChatAI.JS";
// import { useEffect } from "react";

function ChatBot({ weather, setChatBot }) {
  console.log("TES INI DARI CHAT BOT");
  async function handleChat() {
    const result = await postChatAI(weather);

    setChatBot(result);
    console.log("TES BUTTON AI");
  }

  return (
    <>
      <button onClick={handleChat} id="ai_button">
        Analisis Laporan
      </button>
    </>
  );
}

export default ChatBot;

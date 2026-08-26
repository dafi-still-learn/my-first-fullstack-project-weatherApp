import { useEffect, useState } from "react";

function ChatAI({ setChatBot, weather }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleChat = async () => {
      try {
        const response = await fetch("http://localhost:8000/weather/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            weather: weather.prakiraan,
          }),
        });

        const data = await response.json();

        setChatBot(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    };
    handleChat();
  }, [weather, setChatBot]);
  if (!loading) {
    return (
      <>
        <div>
          <h1>Masukkan nama kota di input</h1>
        </div>
      </>
    );
  }
  return null;
}

export default ChatAI;

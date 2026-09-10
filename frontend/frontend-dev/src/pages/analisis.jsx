import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import "../index.css";
import { useOutletContext } from "react-router-dom";
import Diagram_suhu from "../components/diagarm_suhu";
import Diagram_kelembapan from "../components/diagran_kelembapan";
import Diagram_angin from "../components/Diagram_angin";
import ChatBot from "../components/chat_AI";
import { useState } from "react";

function Analisis() {
  const { weather } = useOutletContext();
  const [chatBot, setChatBot] = useState(null);

  if (!weather) {
    return <p>errorrr</p>;
  }
  return (
    <section className="grid grid-cols-20 w-screen h-screen relative">
      <Sidebar></Sidebar>
      <section
        className="col-span-19 w-full h-full flex place-content-center flex-col gap-1"
        id="analisis"
      >
        <div>
          <h2>analisis</h2>
        </div>
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
          <Cards>
            <h1>Diagram Analisis Suhu</h1>
            <Diagram_suhu data={weather.prakiraan} />
          </Cards>
          <Cards>
            <h1>Diagram Analisis Kelembapan</h1>
            <Diagram_kelembapan data={weather.prakiraan} />
          </Cards>
          <Cards>
            <h1>Diagram Analisis Angin</h1>
            <Diagram_angin data={weather.prakiraan} />
          </Cards>
          <Cards>
            <h1>Hasil Analisis AI</h1>
            <ChatBot setChatBot={setChatBot} weather={weather}></ChatBot>
            {chatBot && (
              <div>
                <p>{chatBot}</p>
              </div>
            )}
          </Cards>
        </div>
      </section>
    </section>
  );
}

export default Analisis;

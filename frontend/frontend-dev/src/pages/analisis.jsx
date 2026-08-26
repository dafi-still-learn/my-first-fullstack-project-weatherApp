import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import "../index.css";
import { useOutletContext } from "react-router-dom";
import Diagram_suhu from "../components/diagarm_suhu";
import Diagram_kelembapan from "../components/diagran_kelembapan";
import Diagram_angin from "../components/Diagram_angin";
import ChatAI from "../components/chat_AI";
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
        className="col-span-19 w-full h-full grid place-content-center grid-cols-2 grid-rows-2 gap-5"
        id="analisis"
      >
        <Cards>
          <h1>digram analisis suhu</h1>
          <Diagram_suhu data={weather.prakiraan} />
        </Cards>
        <Cards>
          <h1>digram analisis kelembapan</h1>
          <Diagram_kelembapan data={weather.prakiraan} />
        </Cards>
        <Cards>
          <h1>digram analisis angin</h1>
          <Diagram_angin data={weather.prakiraan} />
        </Cards>
        <Cards>
          <h1>Hasil Analisis AI</h1>
          <ChatAI setChatBot={setChatBot} weather={weather}></ChatAI>
          {chatBot && (
            <div>
              <p>{chatBot}</p>
            </div>
          )}
        </Cards>
      </section>
    </section>
  );
}

export default Analisis;

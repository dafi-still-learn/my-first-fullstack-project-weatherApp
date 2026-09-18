import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import "../index.css";
import { useOutletContext } from "react-router-dom";
import Diagram_suhu from "../components/diagarm_suhu";
import Diagram_kelembapan from "../components/diagran_kelembapan";
import Diagram_angin from "../components/Diagram_angin";
// import ReactMarkdown from "react-markdown";
// import ChatBot from "../components/chat_AI";
// import { useState } from "react";

function Analisis() {
  const { weather, analisisAi, getDataAnalisis } = useOutletContext();
  // const [chatBot, setChatBot] = useState(null);

  console.log("TYPE DATA DARI ANALISIS AI", typeof analisisAi);

  console.log(getDataAnalisis);
  if (!weather) {
    return <p>terjadi error pada data cuaca</p>;
  }

  return (
    <section className="grid grid-cols-20 w-screen h-screen relative overflow-hidden">
      <Sidebar></Sidebar>
      <section
        className="col-span-19 w-full h-full min-w-0 min-h-0 flex justify-start flex-col gap-1  overflow-y-auto"
        id="analisis"
      >
        <div>
          <h2>analisis</h2>
        </div>
        <div className=" grid grid-rows-3 gap-1" id="analisis_tab">
          <div className="row-span-1 grid grid-cols-3 gap-1">
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
          </div>
          <div className="row-span-2 scroll-auto">
            <Cards>
              <h1>Hasil Analisis AI</h1>
              <button onClick={getDataAnalisis}>analisis</button>
              <div>
                {/* <ReactMarkdown> */}
                <p>{analisisAi}</p>
                {console.log("TYPE DATA DARI ANALISIS AI", typeof analisisAi)}
                {/* {console.log(
                  "KEYS OBJECT DARI ANALISIS AI",
                  Object.keys(analisisAi),
                )} */}
                {/* </ReactMarkdown> */}
              </div>
            </Cards>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Analisis;

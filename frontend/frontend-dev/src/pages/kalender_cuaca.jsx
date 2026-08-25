import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import CalenderWeather from "../components/calender";
import { useOutletContext } from "react-router-dom";

function Kalender() {
  const { weather } = useOutletContext();

  console.log(weather.prakiraan);
  if (!weather) {
    return <p>errorr</p>;
  }
  return (
    <>
      <section className="grid grid-cols-20 w-screen h-screen">
        <Sidebar></Sidebar>
        <section
          className="col-span-19 h-full w-full grid place-content-center grid-cols-1 grid-rows-1"
          id="kalender"
        >
          <Cards className=" h-full w-full">
            <CalenderWeather data={weather.prakiraan} />
          </Cards>
        </section>
      </section>
    </>
  );
}

export default Kalender;

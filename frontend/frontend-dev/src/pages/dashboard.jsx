import "../index.css";
import Cards from "../components/card";
import Sidebar from "../components/sidebar";
import Calendar from "react-calendar";
import ilustrasi_gambar1 from "../assets/Windy day-bro.svg";
import ilustrasi_gambar2 from "../assets/Umbrella-bro.svg";
import ilustrasi_gambar3 from "../assets/Season change-bro.svg";
import ilustrasi_gambar4 from "../assets/beach house-bro.svg";
import Navbar from "../components/navbar";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const { weather, setWeather } = useOutletContext();
  const [date, setDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);
  const handleData = (date) => {
    const tanggal = date.toISOString().split("T")[0];
    const weatherData = weather.prakiraan.find((item) =>
      item.waktu.startsWith(tanggal),
    );

    setSelectedData(weatherData);
  };
  return (
    <>
      <section id="dashboard" className="grid grid-cols-20 h-screen w-screen">
        <Sidebar></Sidebar>
        <section
          id="home"
          className="col-span-14 grid grid-rows-7 h-full w-full gap-5"
        >
          <Navbar setWeather={setWeather}></Navbar>
          <div className="grid grid-cols-5 h-full w-full row-span-3 gap-5">
            <Cards className=" col-span-2 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div className="z-30 fixed">
                <>
                  <p>{weather?.terkini.namakota_cuaca}</p>
                  <p>{weather?.terkini.waktu}</p>
                </>
              </div>
              <img src={ilustrasi_gambar1} alt="" />
            </Cards>
            <Cards className=" col-span-3 rounded-2xl grid grid-cols-1 place-content-center h-full w-full">
              <div className="fixed">
                <p>{weather?.terkini.cuaca}</p>
                <p>{weather?.terkini.penjelasan}</p>
              </div>
              <img src={ilustrasi_gambar2} alt="" />
            </Cards>
          </div>
          <div className="grid grid-cols-5 h-full w-full row-span-3 gap-5">
            <Cards className=" col-span-3 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div className="fixed">
                <p>{weather?.terkini.suhu}</p>
                <p>{weather?.terkini.kelembapan}%</p>
              </div>
              <img src={ilustrasi_gambar3} alt="" />
            </Cards>
            <Cards className=" col-span-2 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div className="fixed">
                <p>{weather?.terkini.angin}m/s</p>
              </div>
              <img src={ilustrasi_gambar4} alt="" />
            </Cards>
          </div>
        </section>
        <section
          id="information"
          className="col-span-5 w-full h-full grid grid-cols-1 gap-3 justify-between"
        >
          <Cards>
            <div>
              <div>
                <Calendar
                  onChange={(date) => {
                    (handleData(date), setDate(date));
                  }}
                  value={date}
                />
              </div>
            </div>
          </Cards>
          <Cards>
            {selectedData && (
              <div>
                <h1>{selectedData.cuaca}</h1>
                <h1>{selectedData.penjelasan}</h1>
                <h1>{selectedData.kelembapan}%</h1>
                <h1>{selectedData.angin}m/s</h1>
              </div>
            )}
          </Cards>
        </section>
      </section>
    </>
  );
}

export default Dashboard;

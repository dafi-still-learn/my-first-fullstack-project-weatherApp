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
import { useLocation } from "react-router-dom";
import Make_profil from "../components/make_profil";

function Dashboard() {
  const location = useLocation();
  const userId = location.state?.user_id;
  const profilComplete = location.state?.profil_complete;
  const dataProfil = location.state?.data_profil;
  const { weather, setWeather } = useOutletContext();
  const [date, setDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);
  const [showProfil, setShowProfil] = useState(profilComplete);

  console.log("ini user id dari dashboard", userId);

  const handleData = (date) => {
    const tanggal = date.toLocaleDateString("en-CA");
    const weatherData = weather.prakiraan.find((item) =>
      item.waktu.startsWith(tanggal),
    );

    setSelectedData(weatherData);
  };
  return (
    <>
      <section id="dashboard" className="grid grid-cols-20 h-screen w-screen">
        {showProfil && (
          <Make_profil userId={userId} onclose={() => setShowProfil(false)} />
        )}
        <Sidebar></Sidebar>
        <section
          id="home"
          className="col-span-14 grid grid-rows-7 h-full w-full gap-5"
        >
          <Navbar setWeather={setWeather} data_profil={dataProfil}></Navbar>
          <div className="grid grid-cols-5 h-full w-full row-span-3 gap-5">
            <Cards className=" col-span-2 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div>
                <>
                  <h3>nama kota:</h3>
                  <p>{weather?.terkini.namakota_cuaca}</p>
                  <h3>waktu:</h3>
                  <p>{weather?.terkini.waktu}</p>
                </>
              </div>
              <img src={ilustrasi_gambar1} alt="" />
            </Cards>
            <Cards className=" col-span-3 rounded-2xl grid grid-cols-1 place-content-center h-full w-full">
              <div>
                <h3>cuaca:</h3>
                <p>{weather?.terkini.cuaca}</p>
                <h3>rincian:</h3>
                <p>{weather?.terkini.penjelasan}</p>
              </div>
              <img src={ilustrasi_gambar2} alt="" />
            </Cards>
          </div>
          <div className="grid grid-cols-5 h-full w-full row-span-3 gap-5">
            <Cards className=" col-span-3 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div>
                <h3>suhu:</h3>
                <p>{weather?.terkini.suhu}</p>
                <h3>kelembapan:</h3>
                <p>{weather?.terkini.kelembapan}%</p>
              </div>
              <img src={ilustrasi_gambar3} alt="" />
            </Cards>
            <Cards className=" col-span-2 rounded-2xl w-full h-full grid grid-cols-1 place-content-center">
              <div>
                <h3>kecepatan angin:</h3>
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
            <h1 className="mb-2">Prakiraan cuaca</h1>
            {selectedData && (
              <div>
                <h1>{selectedData.cuaca}</h1>
                <h1>{selectedData.penjelasan}</h1>
                <h1>{selectedData.suhu}</h1>
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

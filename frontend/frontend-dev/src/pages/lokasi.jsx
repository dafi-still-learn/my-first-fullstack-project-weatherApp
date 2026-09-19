import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import { useOutletContext } from "react-router-dom";
import Location from "../components/location";
import "../index.css";

function Lokasi_rekomendasi() {
  const { WeatherLocation } = useOutletContext();

  if (!WeatherLocation) {
    console.log("INI DARI LOKASI_REKOEMNDASI GAGAL MEMUAT");
  }
  console.log("INI DATA DAERAH TERDEKAT:", WeatherLocation);
  WeatherLocation.map;

  return (
    <>
      <Location />
      <section className="grid grid-cols-20 w-screen h-screen overflow-hidden">
        <Sidebar></Sidebar>
        <section
          className="col-span-19 grid grid-cols-1 place-content-center gap-5 w-full h-full grid-rows-2"
          id="lokasi"
        >
          <div className="grid grid-cols-3 grid-rows-3 gap-5 overflow-y-scroll">
            {WeatherLocation.map((item) => (
              <Cards>
                <h1>{item.namakota_cuaca}</h1>
                <h1>{item.waktu}</h1>
                <h1>{item.cuaca}</h1>
                <h1>{item.penjelasan}</h1>
                <h1>{item.angin}</h1>
              </Cards>
            ))}
            {/* <Cards>
              <h1>{WeatherLocation[0].namakota_cuaca}</h1>
              <h1>{WeatherLocation[0].waktu}</h1>
              <h1>{WeatherLocation[0].cuaca}</h1>
              <h1>{WeatherLocation[0].penjelasan}</h1>
              <h1>{WeatherLocation[0].kelembapan}</h1>
              <h1>{WeatherLocation[0].angin}</h1>
            </Cards>
            <Cards>
              <h1>{WeatherLocation[1].namakota_cuaca}</h1>
              <h1>{WeatherLocation[1].waktu}</h1>
              <h1>{WeatherLocation[1].cuaca}</h1>
              <h1>{WeatherLocation[1].penjelasan}</h1>
              <h1>{WeatherLocation[1].kelembapan}</h1>
              <h1>{WeatherLocation[1].angin}</h1>
            </Cards>
            <Cards>
              <h1>{WeatherLocation[2].namakota_cuaca}</h1>
              <h1>{WeatherLocation[2].waktu}</h1>
              <h1>{WeatherLocation[2].cuaca}</h1>
              <h1>{WeatherLocation[2].penjelasan}</h1>
              <h1>{WeatherLocation[2].kelembapan}</h1>
              <h1>{WeatherLocation[2].angin}</h1>
            </Cards> */}
          </div>
        </section>
      </section>
    </>
  );
}

export default Lokasi_rekomendasi;

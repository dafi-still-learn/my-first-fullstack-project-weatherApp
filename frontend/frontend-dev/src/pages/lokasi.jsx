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
  console.log("INI DATA SUHU LOKASI:", WeatherLocation);
  return (
    <>
      <Location />
      <section className="grid grid-cols-20 w-screen h-screen">
        <Sidebar></Sidebar>
        <section
          className="col-span-19 grid grid-cols-1 place-content-center gap-5 w-full h-full grid-rows-2"
          id="lokasi"
        >
          <Cards></Cards>
          <div className="grid grid-cols-3 gap-5">
            <Cards>
              <h1>{WeatherLocation?.data_lokasi?.namakota_cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.waktu}</h1>
              <h1>{WeatherLocation?.data_lokasi?.cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.penjelasan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.kelembapan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.angin}</h1>
            </Cards>
            <Cards>
              <h1>{WeatherLocation?.data_lokasi?.namakota_cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.waktu}</h1>
              <h1>{WeatherLocation?.data_lokasi?.cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.penjelasan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.kelembapan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.angin}</h1>
            </Cards>
            <Cards>
              <h1>{WeatherLocation?.data_lokasi?.namakota_cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.waktu}</h1>
              <h1>{WeatherLocation?.data_lokasi?.cuaca}</h1>
              <h1>{WeatherLocation?.data_lokasi?.penjelasan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.kelembapan}</h1>
              <h1>{WeatherLocation?.data_lokasi?.angin}</h1>
            </Cards>
          </div>
        </section>
      </section>
    </>
  );
}

export default Lokasi_rekomendasi;

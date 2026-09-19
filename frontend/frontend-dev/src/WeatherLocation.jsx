import { useState } from "react";
import { Outlet } from "react-router-dom";

function WeatherLocation() {
  console.log("tes ini dari weather location");
  const [WeatherLocation, setWeatherLocation] = useState([]);

  return (
    <>
      <Outlet context={{ WeatherLocation, setWeatherLocation }} />
    </>
  );
}

export default WeatherLocation;

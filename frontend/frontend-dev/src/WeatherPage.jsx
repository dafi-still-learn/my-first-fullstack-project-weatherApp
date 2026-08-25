import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/cuaca_terkini")
      .then((response) => response.json())
      .then((result) => {
        if (result.length === 0) {
          setWeather({
            terkini: null,
            prakiraan: [],
          });
          return;
        }

        const currentWeather = result[result.length - 1];

        setWeather({
          terkini: currentWeather,
          prakiraan: [],
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <>
        <div>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <Outlet context={{ weather, setWeather }} />
    </>
  );
}

export default WeatherPage;

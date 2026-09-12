import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postChatAI } from "./services/postChatAI.JS";
function WeatherPage() {
  const location = useLocation();
  const [weather, setWeather] = useState(null);
  const [profil, setProfil] = useState(null);
  const [analisisAi, setAnalisisAi] = useState(null);
  // const [loading, setLoading] = useState(true);
  const user_id = location.state?.user_id;

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
      });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:8000/profil/data?user_id=${user_id}`,
        {
          method: "GET",
        },
      );

      const result = await response.json();

      setProfil(result);

      console.log("HASIL RESULT DARI DATA PROFIL", result);
      console.log("INI USER ID DARO WEATHER PAGE", user_id);
    };
    if (user_id) {
      getData();
    }
  }, [user_id]);

  console.log("DATA DARI CUACA WEATHER PAGE", weather);

  async function getDataAnalisis() {
    const result = await postChatAI(weather);

    setAnalisisAi(result);

    console.log("ini dari analisis ai weather page ");
    console.log("data berubah");
  }
  return (
    <>
      <Outlet
        context={{ weather, setWeather, profil, analisisAi, getDataAnalisis }}
      />
    </>
  );
}

export default WeatherPage;

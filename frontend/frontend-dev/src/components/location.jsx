import { useGeolocated } from "react-geolocated";
import { sendLocation } from "../services/sendLocation";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Location() {
  const { setWeatherLocation } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  useEffect(() => {
    if (!coords) return;

    async function getWeatherLocation() {
      try {
        const result = await sendLocation(coords.latitude, coords.longitude);
        console.log("DATA BACKEND:", result);

        setWeatherLocation(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getWeatherLocation();
  }, [coords, setWeatherLocation]);
  if (loading) {
    console.log("data sedang diolah");
    // return (
    //   <>
    //     <div>
    //       <h1>DATA SEDANG DIOLAHHHHHHHHHHHHHHH</h1>
    //     </div>
    //     ;
    //   </>
    // );
  }
  return null;
}

export default Location;

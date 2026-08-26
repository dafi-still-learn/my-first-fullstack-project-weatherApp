import Button from "./button";
import { SearchAlt } from "@boxicons/react";
import { useState } from "react";
import "../index.css";

function Input_text({ setWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(city);
    try {
      const response = await fetch("http://localhost:8000/weather/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city,
        }),
      });

      const data = await response.json();

      setWeather(data);
      console.log("data weather terkini", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-4 w-full h-full justify-between p-10"
        id="form_search"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="masukkan kota"
          className="col-span-3"
        />
        <Button type="submit" id="btn-search" className="col-span-1">
          <SearchAlt></SearchAlt>
        </Button>
      </form>
    </>
  );
}

export default Input_text;

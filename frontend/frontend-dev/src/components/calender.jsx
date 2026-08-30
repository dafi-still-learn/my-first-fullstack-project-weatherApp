import "react-calendar/dist/Calendar.css";
import "../Calender.css";
import { Calendar } from "react-calendar";
import { useState } from "react";

function CalenderWeather({ data }) {
  const [date, setDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);

  const handleData = (date) => {
    const tanggal = date.toLocaleDateString("en-CA");
    const weatherData = data.find((item) => item.waktu.startsWith(tanggal));

    setSelectedData(weatherData);

    console.log(weatherData);
  };

  return (
    <>
      <div>
        <div>
          <Calendar
            onChange={(date) => {
              (handleData(date), setDate(date));
            }}
            value={date}
          />
        </div>
        <h1>prakiraan dalam waktu 6 hari kedepan</h1>
        <p>
          <span>Pada Tanggal</span> {date.toDateString()}
        </p>
        {selectedData && (
          <div>
            <h1>{selectedData.cuaca}</h1>
            <h1>{selectedData.suhu}</h1>
            <h1>{selectedData.penjelasan}</h1>
            <h1>{selectedData.kelembapan}%</h1>
            <h1>{selectedData.angin}m/s</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default CalenderWeather;

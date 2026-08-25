import "react-calendar/dist/Calendar.css";
import "../Calender.css";
import { Calendar } from "react-calendar";
import { useState } from "react";

function CalenderWeather({ data }) {
  const [date, setDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);
  const handleData = (date) => {
    const tanggal = date.toISOString().split("T")[0];
    const weatherData = data.find((item) => item.waktu.startsWith(tanggal));
    console.log("ini data weather", weatherData);
    console.log(tanggal);

    setSelectedData(weatherData);
  };

  console.log("ini dari kalender", data);
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
        <p>
          <span>Select Date</span> {date.toDateString()}
        </p>
        {selectedData && (
          <div>
            <h1>{selectedData.cuaca}</h1>
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

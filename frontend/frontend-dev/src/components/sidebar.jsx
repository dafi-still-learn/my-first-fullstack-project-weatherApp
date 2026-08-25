import { useNavigate } from "react-router-dom";
import Button from "./button";
import {
  Dashboard,
  ChartSine,
  Gear,
  CalendarAlt,
  LocationAlt,
} from "@boxicons/react";

function Sidebar() {
  const navigate = useNavigate();
  function handleDashboard() {
    navigate("/dashboard");
  }
  function handleAnalisis() {
    navigate("/analisis");
  }
  function handleRekomendasi() {
    navigate("/lokasi/lokasi_rekomendasi");
  }
  function handleKalender() {
    navigate("/kalender");
  }
  function handlePengaturan() {
    navigate("/pengaturan");
  }
  return (
    <>
      <section
        id="sidebar"
        className="grid grid-rows-13  col-span-1  justify-between w-full h-full place-content-center p-20"
      >
        <div className="row-span-12 flex-col flex gap-4 place-items-center w-full h-full">
          <Button className="flex place-items-center" onClick={handleDashboard}>
            <Dashboard></Dashboard>
          </Button>
          <Button className="cursor-pointer" onClick={handleAnalisis}>
            <ChartSine></ChartSine>
          </Button>
          <Button className="cursor-pointer" onClick={handleRekomendasi}>
            {console.log("MENU LOKASI")}
            <LocationAlt></LocationAlt>
          </Button>
          <Button className="cursor-pointer" onClick={handleKalender}>
            <CalendarAlt></CalendarAlt>
          </Button>
        </div>
        <div className="row-span-1">
          <Button className="cursor-pointer" onClick={handlePengaturan}>
            <Gear></Gear>
          </Button>
        </div>
      </section>
    </>
  );
}

export default Sidebar;

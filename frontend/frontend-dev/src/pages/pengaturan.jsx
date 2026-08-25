import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function Pengaturan() {
  const navigate = useNavigate();
  function handleKeluar() {
    navigate("/keluar");
  }
  return (
    <>
      <section className="grid grid-cols-20 w-screen h-screen">
        <Sidebar></Sidebar>
        <section className="grid col-span-19 grid-cols-5 gap-8" id="pengaturan">
          <Cards className="bg-amber-400 flex gap-5 w-full h-full p-100">
            <Button>display</Button>
            <Button>diagram</Button>
            <Button>perhitungan</Button>
            <Button onClick={handleKeluar}>keluar</Button>
          </Cards>
          <Cards className="bg-amber-400 col-span-4">
            <h1>isi menu pengaturan</h1>
          </Cards>
        </section>
      </section>
    </>
  );
}

export default Pengaturan;

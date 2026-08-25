import Sidebar from "../components/sidebar";
import Cards from "../components/card";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function Keluar() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <>
      <section className="w-screen h-screen grid grid-cols-20">
        <Sidebar></Sidebar>
        <section
          className="col-span-19 grid place-content-center w-full h-full"
          id="keluar"
        >
          <Cards className="grid grid-cols-1 w-60 h-60 rounded-2xl gap-3">
            <Button>Lapor</Button>
            <Button>Bantuan</Button>
            <Button>ketentuan</Button>
            <Button onClick={handleLogin}>Keluar</Button>
          </Cards>
        </section>
      </section>
    </>
  );
}

export default Keluar;

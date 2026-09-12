import Sidebar from "../components/sidebar";
// import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Profil() {
  // const location = useLocation();
  // const data_profil_users = location.state?.data_profil;

  const { profil } = useOutletContext();

  // console.log("LOCATION", location);
  // console.log("STATE", location.state);
  // console.log("DATA NAMA PANJANG", data_profil_users?.nama_panjang);
  console.log(profil);
  return (
    <>
      <section className="grid grid-cols-20 w-screen h-screen">
        <Sidebar></Sidebar>
        <section className="grid col-span-19 gap-8 grid-cols-1" id="profil">
          <h1>Profil</h1>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <img src="" alt="" className="row-span-1" />
            </div>
            <div className="col-span-4">
              <h1>{profil?.data_profil?.nama_panggilan}</h1>
            </div>
          </div>
          <div>
            <h1>nama panjang</h1>
            <h2>{profil?.data_profil?.nama_panjang}</h2>
          </div>
          <div>
            <h1>nama panggilan</h1>
            <h2>{profil?.data_profil?.nama_panggilan}</h2>
          </div>
          <div>
            <h1>umur</h1>
            <h2>{profil?.data_profil?.umur}</h2>
          </div>
          <button>edit profil</button>
        </section>
      </section>
    </>
  );
}
export default Profil;

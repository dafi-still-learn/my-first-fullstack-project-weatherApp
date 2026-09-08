import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom";

function Profil() {
  const location = useLocation();
  const data_profil = location.state?.data_profil;
  return (
    <>
      <section className="grid grid-cols-20 w-screen h-screen">
        <Sidebar></Sidebar>
        <section className="grid col-span-19 gap-8 grid-cols-1" id="pengaturan">
          <h1>tes ini halaman profil</h1>
          <div className="grid grid-cols-5 gap-4">
            <img src="" alt="" className="row-span-1" />
            <h1 className="row-span-4">{data_profil.nama_panggilan}</h1>
          </div>
          <div>
            <h1>nama panjang</h1>
            <h2>{data_profil.nama_panjang}</h2>
          </div>
          <div>
            <h1>nama panggilan</h1>
            <h2>{data_profil.nama_panggilan}</h2>
          </div>
          <div>
            <h1>umur</h1>
            <h2>{data_profil.umur}</h2>
          </div>
          <button>ok</button>
        </section>
      </section>
    </>
  );
}
export default Profil;

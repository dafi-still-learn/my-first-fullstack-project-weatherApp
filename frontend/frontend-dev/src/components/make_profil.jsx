import { useState } from "react";
import { sendProfil } from "../services/sendProfil";
import "../index.css";

function Make_profil({ userId }) {
  const [namaAsli, setNamaAsli] = useState("");
  const [namaPanggilan, setNamaPanggilan] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");

  console.log("INI USER ID DARI PROFIL", userId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("INI DARI FORM PROFIL");

    const result = await sendProfil(
      userId,
      namaAsli,
      namaPanggilan,
      tanggalLahir,
    );

    console.log({ userId, namaAsli, namaPanggilan, tanggalLahir, result });
    if (result === true) {
      console.log("data sudah terisi");
    }

    if (result === false) {
      console.log("data belum terisi semua");
    }

    console.log("ini dari profil", result);
  };

  return (
    <>
      <div className="fixed" id="make_profil">
        <h1 className="row-span-1">Edit Profil</h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="grid w-full h-full grid-rows-7 gap-5"
        >
          <label htmlFor="nama_asli" className="row-span-2">
            masukkan nama asli
            <input
              type="text"
              name="nama_asli"
              onChange={(e) => setNamaAsli(e.target.value)}
            />
          </label>
          <label htmlFor="nama_asli" className="row-span-2">
            nama profil
            <input
              type="text"
              name="nama_asli"
              onChange={(e) => setNamaPanggilan(e.target.value)}
            />
          </label>
          <label htmlFor="umur_asli" className="row-span-2 bg-amber-700">
            umur
            <input
              type="input"
              name="umur_asli"
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </label>
          <button className="row-span-1" type="submit">
            simpan
          </button>
        </form>
      </div>
    </>
  );
}

export default Make_profil;

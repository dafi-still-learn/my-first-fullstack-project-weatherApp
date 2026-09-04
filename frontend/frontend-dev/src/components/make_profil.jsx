import { useState } from "react";
import { sendProfil } from "../services/sendProfil";

function Make_profil() {
  const [foto, setFoto] = useState(null);
  const [namaAsli, setNamaAsli] = useState("");
  const [namaPanggilan, setNamaPanggilan] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendProfil(
      foto,
      namaAsli,
      namaPanggilan,
      tanggalLahir,
    );

    return result;
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="foto_profil">
            masukkan foto profil
            <input
              type="image"
              name="foto_profil"
              onChange={(e) => setFoto(e.target.value)}
            />
          </label>
          <label htmlFor="nama_asli">
            masukkan nama asli
            <input
              type="text"
              name="nama_asli"
              onChange={(e) => setNamaAsli(e.target.value)}
            />
          </label>
          <label htmlFor="nama_asli">
            nama profil
            <input
              type="text"
              name="nama_asli"
              onChange={(e) => setNamaPanggilan(e.target.value)}
            />
          </label>
          <label htmlFor="umur_asli">
            umur
            <input
              type="date"
              name="umur_asli"
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </label>
          <button type="submit">simpan</button>
        </form>
      </div>
    </>
  );
}

export default Make_profil;

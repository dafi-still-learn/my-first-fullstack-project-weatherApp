export async function sendProfil(
  gambar,
  nama_panjang,
  nama_panggilan,
  tanggal_lahir,
) {
  const response = await fetch("http://localhost:8000/profil_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gambar: gambar,
      nama_panjang: nama_panjang,
      nama_panggilan: nama_panggilan,
      tanggal_lahir: tanggal_lahir,
    }),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim data profil");
  }

  return await response.json();
}

export async function sendProfil(
  user_Id,
  nama_panjang,
  nama_panggilan,
  umur,
  mode,
) {
  console.log("INI DARI SENDPROFIL");
  const response = await fetch("http://localhost:8000/profil", {
    mode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_Id: user_Id,
      nama_panjang: nama_panjang,
      nama_panggilan: nama_panggilan,
      umur: umur,
    }),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim data profil");
  }

  return await response.json();
}

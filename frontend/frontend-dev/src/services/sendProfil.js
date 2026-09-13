const API_URL = import.meta.env.VITE_API_URL;

export async function sendProfil(
  user_Id,
  nama_panjang,
  nama_panggilan,
  umur,
  mode,
) {
  console.log("INI DARI SENDPROFIL");
  const response = await fetch(`${API_URL}/profil`, {
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

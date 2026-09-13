const API_URL = import.meta.env.VITE_API_URL;

export async function getDataProfil(user_Id) {
  const response = await fetch(`${API_URL}/profil/data?user_id=${user_Id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("terjadi error dan gagal mengambil data profil");
  }

  return await response.json();
}

export async function getDataProfil(user_Id) {
  const response = await fetch(
    `http://localhost:8000/profil/data?user_id=${user_Id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error("terjadi error dan gagal mengambil data profil");
  }

  return await response.json();
}

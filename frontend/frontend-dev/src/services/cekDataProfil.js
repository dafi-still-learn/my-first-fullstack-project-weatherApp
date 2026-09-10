export async function cekDataProfil(user_id) {
  const response = await fetch(
    `http://localhost:8000/profil/data?user_id=${user_id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error("TERJADI ERROR PADA VALIDASI AKUN");
  }

  return await response.json();
}

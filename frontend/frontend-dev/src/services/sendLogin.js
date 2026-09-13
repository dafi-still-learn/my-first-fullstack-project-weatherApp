const API_URL = import.meta.env.VITE_API_URL;

export async function sendLogin(username, password) {
  const response = await fetch(`${API_URL}/login_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const result = await response.json();

  console.log("RESPONS DARI LOGIN", result);
  if (!response.ok) {
    throw new Error("Gagal mengirim login ke database");
  }
  return result;
}

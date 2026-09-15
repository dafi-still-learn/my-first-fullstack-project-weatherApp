const API_URL = import.meta.env.VITE_API_URL;

export async function sendAccount(email, username, password) {
  const response = await fetch(`${API_URL}/register_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  });

  const result = await response.json();

  console.log("ini dari register frontend", result);
  if (response.ok) {
    return true;
  }

  if (!response.ok) {
    throw new Error("gagal mengirim akun");
  }

  return result;
}

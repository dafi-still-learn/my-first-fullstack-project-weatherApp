export async function sendAccount(email, username, password) {
  const response = await fetch("http://localhost:8000/register_user", {
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
  if (response.ok && response.succes) {
    return true;
  }

  if (!response.ok) {
    throw new Error("gagal mengirim akun");
  }

  return result;
}

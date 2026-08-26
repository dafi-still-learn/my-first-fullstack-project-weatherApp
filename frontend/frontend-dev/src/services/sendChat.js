export async function sendChat(chat) {
  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat,
    }),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim chat");
  }

  return await response.json();
}

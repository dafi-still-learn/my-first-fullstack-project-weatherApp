export async function postChatAI(weather) {
  const response = await fetch("http://localhost:8000/weather/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weather: weather.prakiraan,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error("gagal post data ke backend");
  }

  return result;
}

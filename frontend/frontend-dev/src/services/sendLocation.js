export async function sendLocation(latitude, longitude) {
  const response = await fetch("http://localhost:8000/weather/location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      latitude,
      longitude,
    }),
  });

  if (!response.ok) {
    throw new Error("Gagal mengirim lokasi");
  }

  return await response.json();
}

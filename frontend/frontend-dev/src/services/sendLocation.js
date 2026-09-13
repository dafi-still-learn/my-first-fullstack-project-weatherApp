const API_URL = import.meta.env.VITE_API_URL;

export async function sendLocation(latitude, longitude) {
  const response = await fetch(`${API_URL}/weather/location`, {
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

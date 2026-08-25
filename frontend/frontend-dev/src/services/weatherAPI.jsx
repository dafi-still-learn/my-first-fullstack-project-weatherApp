const API_URL = "http://127.0.0.1:8000";

export const gerWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}/weather/data_terkini`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
      }),
    });

    if (!response.ok) {
      throw new Error("gagal mengambil data cuaca");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

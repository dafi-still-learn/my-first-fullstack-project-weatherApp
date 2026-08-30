from google import genai
import os
from dotenv import load_dotenv
load_dotenv()

get_api_openAI = os.getenv('key_geminiAI')

client = genai.Client(api_key=get_api_openAI)


def chatBot(weather):
    if (weather):
        weather_text = f"""
        berikan aku beberapa point dari data cuaca ini, pertama kesimpulan kedua suhu terpanas, suhu terdingin, suhu ternyaman, ketiga rekomendasi apa yang perlu disiapkan untuk menghadapi cuaca tersebut kalau kebanyakan cuaca nya enak dan nyaman kasih ucapan selamat menikmati hari-hari mu dengan penjelasan pendek:
        {weather}
        """

        interaction = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=weather_text
        )

        data_analisis_ai = interaction.text
        return data_analisis_ai

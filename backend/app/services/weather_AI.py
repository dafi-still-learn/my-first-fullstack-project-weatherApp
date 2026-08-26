from google import genai
import os
from dotenv import load_dotenv
load_dotenv()

get_api_openAI = os.getenv('key_geminiAI')

client = genai.Client(api_key=get_api_openAI)


def chatBot(weather):
    if (weather):
        weather_text = f"""
        berikan aku kesimpulan dari data prakiraan cuaca kota ini:
        {weather}
        """

        interaction = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=weather_text
        )
        return interaction.text

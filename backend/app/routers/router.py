from fastapi import APIRouter
from app.database.crud import buat_tabel_cuaca_terkini, buat_tabel_cuaca_prakiraan, input_cuaca_api_terkini, input_cuaca_api_prakiraan
from app.schemas.schemas import WeatherSearch, WeatherLocation, requestChatBot
from app.services.api_weather import weather_current, weather_forecast, weather_location_current, tiga_lokasi_terdekat
from app.models.models import olah_data_tabel_cuaca_prakiraan, olah_data_tabel_cuaca_terkini
from app.services.weather_AI import chatBot

router = APIRouter()


buat_tabel_cuaca_terkini()
buat_tabel_cuaca_prakiraan()


@router.get("/cuaca_terkini")
def cuaca_terkini():
    data = olah_data_tabel_cuaca_terkini()

    return data


@router.get("/cuaca_perkiraan")
def cuaca_perkiraan():
    data = olah_data_tabel_cuaca_prakiraan()

    return data


@router.post("/weather/search")
def search_weather_current(data: WeatherSearch):
    weather_terkini = weather_current(data.city)
    weather_prakiraan = weather_forecast(data.city)

    input_cuaca_api_terkini(weather_terkini)
    input_cuaca_api_prakiraan(weather_prakiraan)

    return {
        'terkini': weather_terkini,
        'prakiraan': weather_prakiraan
    }


@router.post("/weather/location")
def location_weather(data: WeatherLocation):
    data_weather_location_current = weather_location_current(
        data.latitude, data.longitude)
    tiga_data_weather_location_current = tiga_lokasi_terdekat(
        data.latitude, data.longitude
    )
    print("DATA LATITUDE:", data.latitude)
    print("DATA LONGITUDE:", data.longitude)

    print("HASIL DATA LOKASI:", data_weather_location_current)
    print("HASIL DATA 3 LOKASI:", tiga_data_weather_location_current)

    return {
        'data_lokasi': data_weather_location_current,
        'tiga_lokasi_terdekat': tiga_data_weather_location_current
    }


@router.post("/weather/chat")
def requestChatBot(data: requestChatBot):
    result_chatBot = chatBot(data.weather)

    print(data.weather)
    print(result_chatBot)

    return (
        result_chatBot
    )

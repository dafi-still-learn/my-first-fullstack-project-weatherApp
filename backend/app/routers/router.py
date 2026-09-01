from fastapi import APIRouter
from app.database.crud import buat_tabel_cuaca_terkini, buat_tabel_cuaca_prakiraan, input_cuaca_api_terkini, input_cuaca_api_prakiraan
from app.schemas.schemas import WeatherSearch, WeatherLocation, requestChatBot, ValidateUser, GetUsers
from app.services.api_weather import weather_current, weather_forecast, weather_location_current, tiga_lokasi_terdekat
from app.models.models import olah_data_tabel_cuaca_prakiraan, olah_data_tabel_cuaca_terkini
from app.services.weather_AI import chatBot
from app.database.account_user import input_akun_user, buat_tabel_user, validate_users, validate_register_users, tampilkan_database_user

router = APIRouter()


buat_tabel_cuaca_terkini()
buat_tabel_cuaca_prakiraan()
buat_tabel_user()


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

    return {
        'data_lokasi': data_weather_location_current,
        'tiga_lokasi_terdekat': tiga_data_weather_location_current
    }


@router.post("/weather/chat")
def requestChatBot(data: requestChatBot):
    result_chatBot = chatBot(data.weather)

    return result_chatBot


@router.post("/register_user")
def getUsers(data: GetUsers):
    validate = validate_register_users(data.email, data.username)

    if not validate:
        input_akun_user(data.email, data.username, data.password)

        print("data berhasil dikirim")

        return True

    return False


@router.post("/login_user")
def valdiateUsers(data: ValidateUser):
    result = validate_users(data.username, data.password)

    if result:
        tampilkan_database_user()
        return {
            "succes": True
        }

    return False

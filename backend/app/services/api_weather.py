import requests as rq
import os
from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

get_api_weather = os.getenv("key_weather")


def weather_current(cityname):
    API_URL_WEATHER = f"https://api.openweathermap.org/data/2.5/weather"

    params_weather = {
        "q": cityname,
        "units": "metric",
        "lang": "id",
        "appid": get_api_weather
    }
    responses_weather = rq.get(
        API_URL_WEATHER, params=params_weather, timeout=60)
    responses_weather.raise_for_status()
    data_weather = responses_weather.json()

    weather_data_current = {
        "namakota_cuaca": data_weather["name"],
        "waktu": datetime.now(),
        "cuaca": data_weather["weather"][0]["main"],
        "penjelasan": data_weather["weather"][0]["description"],
        "suhu": data_weather["main"]["temp"],
        "kelembapan": data_weather["main"]["humidity"],
        'angin': data_weather["wind"]["speed"]
    }
    return weather_data_current


def weather_forecast(cityname):
    API_URL_FORECAST = f"https://api.openweathermap.org/data/2.5/forecast"

    params_weather_forecast = {
        "q": cityname,
        "units": "metric",
        "lang": "id",
        "appid": get_api_weather
    }

    responses_forecast = rq.get(
        API_URL_FORECAST, params=params_weather_forecast, timeout=60)
    responses_forecast.raise_for_status()

    data_forecast = responses_forecast.json()

    data_forecast_simpan = []
    for item in data_forecast['list']:
        data_forecast_simpan.append(
            {
                'waktu': item['dt_txt'],
                'cuaca': item['weather'][0]['main'],
                'penjelasan': item['weather'][0]['description'],
                'suhu': item['main']['temp'],
                'kelembapan': item['main']['humidity'],
                'angin': item['wind']['speed']
            }
        )
    return data_forecast_simpan


def weather_location_current(latitude, longitude):
    API_URL_WEATHER = f"https://api.openweathermap.org/data/2.5/weather"

    params_weather = {
        "lat": latitude,
        "lon": longitude,
        "units": "metric",
        "lang": "id",
        "appid": get_api_weather
    }
    responses_weather = rq.get(
        API_URL_WEATHER, params=params_weather, timeout=60)
    responses_weather.raise_for_status()
    data_weather = responses_weather.json()

    weather_data_current = {
        "namakota_cuaca": data_weather["name"],
        "waktu": datetime.now(),
        "cuaca": data_weather["weather"][0]["main"],
        "penjelasan": data_weather["weather"][0]["description"],
        "suhu": data_weather["main"]["temp"],
        "kelembapan": data_weather["main"]["humidity"],
        'angin': data_weather["wind"]["speed"]
    }
    return weather_data_current


def tiga_lokasi_terdekat(latitude, longitude):
    API_URL_WEATHER = f"https://api.openweathermap.org/data/2.5/weather"

    params_weather = {
        "lat": latitude,
        "lon": longitude,
        "limit": "3",
        "units": "metric",
        "lang": "id",
        "appid": get_api_weather

    }
    responses_weather = rq.get(
        API_URL_WEATHER, params=params_weather, timeout=60)
    responses_weather.raise_for_status()
    data_weather = responses_weather.json()

    weather_data_current = {
        "namakota_cuaca": data_weather["name"],
        "waktu": datetime.now(),
        "cuaca": data_weather["weather"][0]["main"],
        "penjelasan": data_weather["weather"][0]["description"],
        "suhu": data_weather["main"]["temp"],
        "kelembapan": data_weather["main"]["humidity"],
        'angin': data_weather["wind"]["speed"]
    }
    return weather_data_current

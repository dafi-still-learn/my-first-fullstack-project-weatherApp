# MEMVALIDASI DATA SEBELUM DIKIRIM API
from pydantic import BaseModel


class WeatherSearch(BaseModel):
    city: str


class WeatherLocation(BaseModel):
    latitude: float
    longitude: float


class weatherData(BaseModel):
    angin: float
    cuaca: str
    kelembapan: float
    penjelasan: str
    suhu: float
    waktu: str


class requestChatBot(BaseModel):
    weather: list[weatherData]

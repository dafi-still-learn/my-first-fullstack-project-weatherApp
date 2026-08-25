# MEMVALIDASI DATA SEBELUM DIKIRIM API
from pydantic import BaseModel


class WeatherSearch(BaseModel):
    city: str


class WeatherLocation(BaseModel):
    latitude: float
    longitude: float

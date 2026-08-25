# SEBAGAI TEMPAT MENGHUBUNGKAN DARI BACKEND KE FRONTEND MELALUI FASTAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.router import router

from fastapi import FastAPI

app = FastAPI()

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

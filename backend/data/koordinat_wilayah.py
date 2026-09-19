import pandas as pd
from math import radians, sin, cos, sqrt, atan2
from app.services.api_weather import tiga_lokasi_terdekat, weather_current
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
df = pd.read_csv(BASE_DIR / "koordinat.csv")
# MENGHITUNG JARAK


def jarak_wilayah_dari_users(lat1, lon1, lat2, lon2):
    R = 6371

    lat_user = radians(lat1)
    lon_user = radians(lon1)
    lat_wilayah = radians(lat2)
    lon_wilayah = radians(lon2)

    dlat = lat_wilayah-lat_user
    dlon = lon_wilayah-lon_user

    a = (
        sin(dlat/2) ** 2 + cos(lat_user) * cos(lat_wilayah) * sin(dlon/2) ** 2
    )

    c = 2 * atan2(sqrt(a), sqrt(1-a))

    return R * c


# def jarak_user_dengan_setiap_wilayah(lat_user, lon_user):
#     for _, row in df.iterrows():
#         lat_daerah = row['latitude']
#         lon_daerah = row['longitude']

#         jarak = jarak_wilayah_dari_users(
#             lat_user, lon_user, lat_daerah, lon_daerah)

#         print(df)
#         print(row['name'], jarak)

#         return jarak


def membuat_jarak_km(lat_user, lon_user):
    df["jarak_km"] = df.apply(lambda row: jarak_wilayah_dari_users(
        lat_user, lon_user, row['latitude'], row['longitude']
    ), axis=1)

    print('KOLOM JARAK_KM DIBUAT')


def ambil_tiga_daerah_terdekat():
    data = df.sort_values("jarak_km").head(18)

    return data.to_dict(orient="records")


def kelola_data_daerah_terdekat():
    data = ambil_tiga_daerah_terdekat()
    hasil_data_cauca_terdekat = []

    for item in data:
        print(type(item), item['latitude'], item['longitude'])
        print(tiga_lokasi_terdekat(item['latitude'], item['longitude'])
              )
        hasil_data_cauca_terdekat.append(tiga_lokasi_terdekat(item['latitude'], item['longitude'])
                                         )
        ambil_tiga_daerah_terdekat()

    return hasil_data_cauca_terdekat


def fix_duplicate_daerah():
    daerah_terpilih = []
    nama_kota_yang_sdh_ada = set()
    data_cuaca_daerah_fix = []

    data = ambil_tiga_daerah_terdekat()
    for item in data:
        nama = item['name']

        if nama not in nama_kota_yang_sdh_ada:
            daerah_terpilih.append(item)
            nama_kota_yang_sdh_ada.add(nama)

        if len(daerah_terpilih) == 18:
            break

    print("INI DATA DARI FITLER DAERAH", daerah_terpilih)

    for item in daerah_terpilih:
        data_daerah_cauca_fix = tiga_lokasi_terdekat(
            item['latitude'], item['longitude'])

        if data_daerah_cauca_fix is None:
            continue

        data_cuaca_daerah_fix.append(data_daerah_cauca_fix)

    return data_cuaca_daerah_fix

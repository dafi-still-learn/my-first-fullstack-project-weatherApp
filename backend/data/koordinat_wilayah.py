import pandas as pd
from math import radians, sin, cos, sqrt, atan2

df = pd.read_csv("daftar-nama-daerah.csv")

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


hitung_jarak = jarak_wilayah_dari_users()


def jarak_user_dengan_setiap_wilayah(lat_user, lon_user):
    for _, row in df.iterrows():
        lat_daerah = row['latitude']
        lon_daerah = row['longitude']

        jarak = jarak_wilayah_dari_users(
            lat_user, lon_user, lat_daerah, lon_daerah)

        print(row['name'], jarak)

        return jarak


def membuat_jarak_km(lat_user, lon_user):
    df["jarak_km"] = df.apply(lambda row: hitung_jarak(
        lat_user, lon_user, row['latitude'], row['longitude']
    ), axis=1)

    print('KOLOM JARAK_KM DIBUAT')


def ambil_tiga_daerah_terdekat():
    return df.sort_values("jarak_km").head(3)

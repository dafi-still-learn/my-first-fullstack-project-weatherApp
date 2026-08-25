# BERINTERAKSI DENGAN DATABASE, CREATE, READ, UPLOAD, DOWNLOAD
import pandas as pd
from app.database.database1 import tabel_cuaca

# TABEL CUACA TERKINI


def buat_tabel_cuaca_terkini():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS cuaca_terkini (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            kota TEXT,
            waktu DATETIME,
            cuaca TEXT,
            penjelasan TEXT,
            suhu INTEGER,
            kelembapan INTEGER,
            speed_angin INTEGER)
            """)

        conn.commit()
    finally:
        conn.close()


def input_cuaca_api_terkini(data):
    conn = tabel_cuaca()
    try:

        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO cuaca_terkini(kota, waktu, cuaca, penjelasan, suhu, kelembapan, speed_angin)
            VALUES(?,?,?,?,?,?,?)
            """, (data['namakota_cuaca'], data['waktu'], data['cuaca'], data['penjelasan'], data['suhu'], data['kelembapan'], data['angin']))

        conn.commit()
    finally:
        conn.close()


def tampilkan_data_cuaca_terkini():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT * FROM cuaca_terkini
            """)

        data = cursor.fetchall()
        df = pd.DataFrame(data, columns=[
            'id', 'kota', 'waktu', 'cuaca', 'penjelasan', 'suhu', 'kelembapan', 'angin'])
        df = df.astype(object).where(df.notna(), None)
        return df.to_dict(orient='records')

    finally:
        tabel_cuaca().close()


def buat_tabel_cuaca_prakiraan():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
                CREATE TABLE IF NOT EXISTS cuaca_prakiraan (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                waktu DATETIME,
                cuaca TEXT,
                penjelasan TEXT,
                suhu INTEGER,
                kelembapan INTEGER,
                speed_angin INTEGER)
                """)

        conn.commit()
    finally:
        conn.close()


def input_cuaca_api_prakiraan(data):
    conn = tabel_cuaca()
    print(data)
    try:
        cursor = conn.cursor()
        for item in data:
            cursor.execute("""
                INSERT INTO cuaca_prakiraan(waktu, cuaca, penjelasan, suhu, kelembapan, speed_angin)
                VALUES(?,?,?,?,?,?)
                """, (item['waktu'], item['cuaca'], item['penjelasan'], item['suhu'], item['kelembapan'], item['angin']))

        conn.commit()
    finally:
        conn.close()


def tampilkan_data_cuaca_prakiraan():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT * FROM cuaca_prakiraan
            """)

        data = cursor.fetchall()
        df = pd.DataFrame(data, columns=[
            'id', 'waktu', 'cuaca', 'penjelasan', 'suhu', 'kelembapan', 'angin'])

        print(df)
        return data
        # df = df.astype(object).where(df.notna(), None)
        # return df.to_dict(orient='records')
    finally:
        conn.close()

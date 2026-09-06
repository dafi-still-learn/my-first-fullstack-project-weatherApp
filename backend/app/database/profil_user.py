from app.database.database1 import tabel_cuaca
import pandas as pd


def tabel_users_profil():
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS tabel_users_profil_new(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER UNIQUE,
                nama_panjang TEXT,
                nama_panggilan TEXT,
                umur TEXT,
                
                FOREIGN KEY (user_id)
                REFERENCES tabel_user_terbaru(id)
            )
            """
        )

    finally:
        conn.close()


def input_users_profil(nama_panjang, nama_panggilan, umur):
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO tabel_users_profil_new(nama_panjang, nama_panggilan, umur)
            VALUES(?, ?, ?)
            """, (nama_panjang, nama_panggilan, umur)
        )

        conn.commit()

        if nama_panggilan is None or nama_panjang is None or umur is None:
            return False

        return True

    finally:
        conn.close()


def tampilkan_data_users_profil():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT * FROM tabel_users_profil_new
            """
        )

        data = cursor.fetchall()
        df = pd.DataFrame(
            data, columns=["id", "user_id", "nama_panjang", "nama_panggilan", "umur"])

        print(df)

    finally:
        conn.close()


def validate_data_users_profil(user_id):
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT nama_panjang, nama_panggilan, umur
            FROM tabel_users_profil_new
            WHERE user_id = ?
            """, (user_id, )
        )

        data = cursor.fetchone()

        if data is None:
            print("data tidak tersedia")
            return True

        nama_panjang, nama_panggilan, umur = data

        if nama_panjang is None or nama_panggilan is None or umur is None:
            print("salah satu data belum tersedia")
            return True

        return False
    finally:
        conn.close()


def tampilkan_data_users():
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT * FROM tabel_users_profil_new
            """
        )

        data = cursor.fetchall()
        df = pd.DataFrame(
            data, columns=["id", "user_id", "nama_panjang", "nama_panggilan", "umur"])
        return df
    finally:
        conn.close()

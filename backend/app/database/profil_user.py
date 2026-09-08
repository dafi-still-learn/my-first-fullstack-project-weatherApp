from app.database.database1 import tabel_cuaca
import pandas as pd


def tabel_users_profil():
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS tabel_users_profil_cuaca_1(
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


def input_users_profil(user_id, nama_panjang, nama_panggilan, umur):
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO tabel_users_profil_cuaca_1(user_id, nama_panjang, nama_panggilan, umur)
            VALUES(?, ?, ?, ?)
            """, (user_id, nama_panjang, nama_panggilan, umur)
        )

        conn.commit()

        if nama_panggilan is None or nama_panjang is None or umur is None:
            print("INI DENGAN BENAR, DARI DATABSE PROFIL USERS")
            return False
        else:
            return True

    finally:
        conn.close()


def tampilkan_data_users_profil():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT * FROM tabel_users_profil_cuaca_1
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
            FROM tabel_users_profil_cuaca_1
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
            SELECT * FROM tabel_users_profil_cuaca_1
            """
        )

        data = cursor.fetchall()
        df = pd.DataFrame(
            data, columns=["id", "user_id", "nama_panjang", "nama_panggilan", "umur"])
        return df
    finally:
        conn.close()


def ambil_data_profil_user(user_id):
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT nama_panjang, nama_panggilan, umur
            FROM tabel_users_profil_cuaca_1
            WHERE user_id = ?
            """, (user_id,)
        )

        data = cursor.fetchone()

        if data is None:
            print(
                "DATA DARI DATA PROFIL BELUM TERISI, ISI DULU PENGISIAN DATA PROFIL NYA")
            return False

        nama_panjang, nama_panggilan, umur = data

        if all(value == None or value == "" for value in data):
            print("SALAH SATU DATA DARI DATA PROFIL BERLUM TERISI")
            return False

        print("INI DATA NAMA_PANJANG DARI DATA PROFIL", nama_panjang)
        print("INI DATA NAMA_PANGGILAN DARI DATA PROFIL", nama_panggilan)
        print("INI DATA UMUR DARI DATA PROFIL", umur)
        print("INI DATA DARI AMBIL DATA PROFIL", data)
        return {
            "success": True,
            "nama_panjang": data[0],
            "nama_panggilan": data[1],
            "umur": data[2]
        }

    finally:
        conn.close()


def update_data_users_profil(user_id, nama_panjang, nama_panggilan, umur):
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            UPDATE tabel_users_profil_cuaca_1
            SET nama_panjang = ?, nama_panggilan=?, umur = ?
            WHERE user_id = ?
            """, (user_id, nama_panjang, nama_panggilan, umur)
        )

        conn.commit()

    finally:
        conn.close()

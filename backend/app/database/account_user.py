from app.database.database1 import tabel_cuaca
import pandas as pd


def buat_tabel_user():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS tabel_user_cuaca_1 (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT,
                username TEXT,
                password TEXT,
                waktu TEXT)
            """)
        conn.commit()

    finally:
        conn.close()


def input_akun_user(email, username, password, waktu):
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO tabel_user_cuaca_1(email, username, password, waktu)
            VALUES(?, ?, ?, ?)               
        """, (email, username, password, waktu))
        conn.commit()
    finally:
        conn.close()


def validate_register_users(email, username):
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT email
            FROM tabel_user_cuaca_1
            WHERE email = ?
            """, (email,)
        )

        email_validate = cursor.fetchone()

        cursor.execute(
            """
            SELECT username
            FROM tabel_user_cuaca_1
            WHERE username = ?
            """, (username,)
        )

        username_validate = cursor.fetchone()

        if email_validate is not None:
            print("email ini telah digunakan")

            return email

        if username_validate is not None:

            return username

        return None
    finally:
        conn.close()


def validate_users(username, password):
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT id, username, password
            FROM tabel_user_cuaca_1
            WHERE username = ?
            """, (username,)
        )
        user = cursor.fetchone()

        if user is None:
            return False

        if user[1] != password:
            return False

        conn.commit()
        print("INI DARI VALIDATE USERS LOGIN", user[0])
        return {
            "user_id": user[0],
            "success": True
        }
    finally:
        conn.close()


def tampilkan_database_user():
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT * FROM tabel_user_cuaca_1
            """
        )

        data = cursor.fetchall()

        df = pd.DataFrame(
            data, columns=["id", "email", "username", "password", "waktu"])
        print("ini dari validasi user register")
        print(df)

    finally:
        conn.close()

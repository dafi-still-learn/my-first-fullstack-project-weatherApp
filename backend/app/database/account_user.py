from app.database.database1 import tabel_cuaca
import pandas as pd


def buat_tabel_user():
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS tabel_user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT,
                username TEXT,
                password TEXT)
            """)
        conn.commit()

    finally:
        conn.close()


def input_akun_user(email, username, password):
    conn = tabel_cuaca()
    try:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO tabel_user(email, username, password)
            VALUES(?, ?, ?)               
        """, (email, username, password))
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
            FROM tabel_user
            WHERE email = ?
            """, (email,)
        )

        email_validate = cursor.fetchone()

        cursor.execute(
            """
            SELECT username
            FROM tabel_user
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
            SELECT username, password
            FROM tabel_user
            WHERE username = ?
            """, (username,)
        )
        user = cursor.fetchone()

        if user is None:
            return False

        if user[1] != password:
            return False

        conn.commit()
        return True
    finally:
        conn.close()


def tampilkan_database_user():
    conn = tabel_cuaca()

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            SELECT * FROM tabel_user
            """
        )

        data = cursor.fetchall()

        df = pd.DataFrame(
            data, columns=["id", "email", "username", "password"])

        print(df)

    finally:
        conn.close()

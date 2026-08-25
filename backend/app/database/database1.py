# MENGATUR KONEKSI DENGAN DATABASE
import sqlite3 as sq

DATABASE = "table_data_baru.db"


def tabel_cuaca():
    return sq.connect(DATABASE)

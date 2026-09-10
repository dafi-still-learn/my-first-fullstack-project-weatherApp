# MENDEFINISIKAN BENTUK STRUKTUR DATA YANG AKAN DIGUNAKAN PADA FRONTEND DARI DATA BASE KEMUDIAN DIKIM KE NAIN API
from app.database.crud import tampilkan_data_cuaca_terkini, tampilkan_data_cuaca_prakiraan
# BUAT DITAMPILKAN DIFRONEND DENGAN MENGOLAH TERLEBIH DAHULU, NANTI AKAN DI IMPORT KALAU SUDAH SELESAI


def olah_data_tabel_cuaca_terkini():
    return tampilkan_data_cuaca_terkini()


def olah_data_tabel_cuaca_prakiraan():
    return tampilkan_data_cuaca_prakiraan()

    # PENYIMPANAN DATA STRING DARI INPUT NAVBAR.JSX

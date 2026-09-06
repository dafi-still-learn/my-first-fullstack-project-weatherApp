import "../index.css";
import { useNavigate } from "react-router-dom";
import { sendLogin } from "../services/sendLogin";
import { useState } from "react";
import ilustasi_aplikasi from "../assets/Weather-bro.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);

    const result = await sendLogin(username, password);

    console.log("tes terakhir telah terkirim, backend merespons", result);

    console.log(result);
    if (result) {
      navigate("/dashboard", {
        state: {
          user_id: result.user_id,
          profil_complete: result.succes,
        },
      });
    }

    if (!result) {
      console.log("AKUN ADA SALAH / TIDAK TERSEDIA");
    }
  };
  function handleLupa_password() {
    navigate("/lupa_sandi");
    console.log("tes ini dari lupa passwrord");
  }
  function handle_register() {
    navigate("/register");
    console.log("ini dari register");
  }

  return (
    <>
      <section className="grid grid-cols-2  h-screen w-screen place-content-center">
        <section className="grid place-content-center h-full w-full">
          <form
            action=""
            onSubmit={handleSubmit}
            id="input"
            className="grid grid-cols-1 justify-between rounded-b-3xl"
          >
            <div className="grid grid-cols-1">
              <h1 className="mb-5">Halo, Selamat Datang Dashboard Cuaca</h1>
              <label htmlFor="username_input" className="flex flex-col">
                Username
                <input
                  type="username"
                  name="username_input"
                  placeholder="masukkan username"
                  className="bg-amber-50 p-10"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label htmlFor="password_input" className="flex flex-col">
                Password
                <input
                  type="password"
                  name="password_input"
                  placeholder="masukkan password"
                  className="bg-amber-50 p-10"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit" className="mt-3 w-20 ">
                masuk
              </button>
            </div>

            <div className="grid grid-cols-2 place-content-center gap-1">
              <button onClick={handleLupa_password}>lupa password</button>
              <button onClick={handle_register}>buat akun baru</button>
            </div>
          </form>
        </section>
        <section id="ilustrasi_login" className="relative">
          <h1>ANALISIS CUACA PINTAR</h1>
          <img src={ilustasi_aplikasi} alt="" />
        </section>
      </section>
    </>
  );
}

export default Login;

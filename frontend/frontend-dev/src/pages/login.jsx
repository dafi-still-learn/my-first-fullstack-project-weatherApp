import "../index.css";
import { useNavigate } from "react-router-dom";
import ilustasi_aplikasi from "../assets/Weather-bro.svg";
function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }
  function handleLupa_password() {
    navigate("/lupa_sandi");
  }
  function handle_register() {
    navigate("/register");
  }
  return (
    <>
      <section className="grid grid-cols-2  h-screen w-screen place-content-center">
        <section className="grid place-content-center h-full w-full">
          <form
            action=""
            id="input"
            className="grid grid-cols-1 justify-between rounded-b-3xl"
          >
            <div className="grid grid-cols-1">
              <h1 className="mb-5">Halo, Selamat Datang Dashboard Cuaca</h1>
              <label htmlFor="email_input" className="flex flex-col">
                Email
                <input
                  type="email"
                  name="email_input"
                  placeholder="masukkan email"
                  className="bg-amber-50 p-10"
                />
              </label>

              <label htmlFor="password_input" className="flex flex-col">
                Password
                <input
                  type="password"
                  name="password_input"
                  placeholder="masukkan password"
                  className="bg-amber-50 p-10"
                />
              </label>
              <button
                type="submit"
                className="mt-3 w-20 "
                onClick={handleLogin}
              >
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

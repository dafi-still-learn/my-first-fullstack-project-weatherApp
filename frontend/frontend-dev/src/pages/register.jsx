import ilustasi_cuaca from "../assets/Weather-bro.svg";
import "../index.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  function handleDashboard() {
    navigate("/login");
  }
  return (
    <>
      <section className="h-screen w-screen grid grid-cols-2">
        <section id="ilustrasi_register">
          <img src={ilustasi_cuaca} alt="" />
        </section>
        <section
          id="form_registrasi"
          className=" h-full w-full grid place-content-center"
        >
          <form
            action=""
            className="grid grid-cols-1 gap-4 rounded-2xl w-100 h-100 "
          >
            <h1>BUAT AKUN</h1>
            <div className="grid grid-cols-1">
              <label htmlFor="username">username</label>
              <input type="text" name="username" placeholder="username" />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="email">email</label>
              <input type="email" name="email" placeholder="email" />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="password">password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <button
              type="submit"
              onClick={handleDashboard}
              className="w-40 h-7  cursor-pointer"
            >
              buat
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;

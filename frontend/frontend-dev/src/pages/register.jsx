import ilustasi_cuaca from "../assets/Weather-bro.svg";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendAccount } from "../services/sendRegister";
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    navigate("/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendAccount(email, username, password);
    if (result === true) navigate("/login");

    if (result === false) console.log("PERHATIKAN EMAIL DAN USERNAME");

    console.log("TESSSSSSS INI DARI REGISTER");
    return result;
  };
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
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 rounded-2xl w-100 h-100 "
          >
            <h1>BUAT AKUN</h1>
            <div className="grid grid-cols-1">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-40 h-7  cursor-pointer">
              buat
            </button>
            <button onClick={handleLogin}>sudah punya akun</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;

import { useNavigate } from "react-router-dom";

function Lupa_sandi() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }

  return (
    <>
      <section
        id="lupa_sandi"
        className="h-screen w-screen grid place-content-center"
      >
        <section id="form_lupa_sandi" className="w-300">
          <form action="" className="grid grid-cols-1 gap-4">
            <p className="text-center">
              Masukkan email anda untuk melakukan perubahan kata sandi melalui
              email anda, terus pantengi email anda ya, kami akan mengirim
              informasi selanjutnya di sana
            </p>
            <div className="grid grid-cols-1">
              <label htmlFor="email">masukkan email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <button type="submit" className="cursor-pointer">
              kirim
            </button>
            <button onClick={handleLogin} className="cursor-pointer">
              kembali
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Lupa_sandi;

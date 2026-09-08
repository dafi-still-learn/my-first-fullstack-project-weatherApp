import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Lupa_sandi from "./pages/lupa_sandi";
import Analisis from "./pages/analisis";
import "./App.css";
import Register from "./pages/register";
import Lokasi_rekomendasi from "./pages/lokasi";
import Pengaturan from "./pages/pengaturan";
import Kalender from "./pages/kalender_cuaca";
import Keluar from "./pages/menu_logout";
import WeatherPage from "./WeatherPage";
import WeatherLocation from "./WeatherLocation";
import Profil from "./pages/profil";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/lupa_sandi" element={<Lupa_sandi />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<WeatherPage />}>
        <Route path="profil" element={<Profil />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analisis" element={<Analisis />} />
        <Route path="lokasi" element={<WeatherLocation />}>
          <Route path="lokasi_rekomendasi" element={<Lokasi_rekomendasi />} />
        </Route>
        <Route path="pengaturan" element={<Pengaturan />} />
        <Route path="kalender" element={<Kalender />} />
        <Route path="keluar" element={<Keluar />} />
      </Route>
    </Routes>
  );
}

export default App;

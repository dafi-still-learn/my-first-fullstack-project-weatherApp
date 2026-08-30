import Button from "./button";
import Input_text from "./input";
import Cards from "./card";
import "../index.css";
import { User } from "@boxicons/react";

function Navbar({ setWeather }) {
  return (
    <>
      <div
        className="row-span-1 w-full h-full grid grid-cols-1"
        id="navbar_section"
      >
        <Cards className="bg-amber-400 rounded-2xl grid grid-cols-5">
          <div className="col-span-3 flex gap-3 font-bold" id="profil_section">
            <Button className="cursor-pointer">
              <User></User>
            </Button>
            <h3>Nur Fauzan Muhammad Khadafi</h3>
          </div>
          <div
            className="col-span-2 flex justify-between gap-10"
            id="input_search"
          >
            <Input_text setWeather={setWeather}></Input_text>
          </div>
        </Cards>
      </div>
    </>
  );
}

export default Navbar;

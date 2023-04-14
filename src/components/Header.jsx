import React from "react"
import { FieldContext } from "../context/fieldContext"
import { DosTresUno, tresDosUno } from "../context/formation"
import Teams from "./Teams";

const Header = () => {
  const { setField } = React.useContext(FieldContext)

  const handleFieldChange = (e) => {
    const formation = e.target.value === "DosTresUno" 
    ? DosTresUno : tresDosUno
    setField(formation)
  }

  return (
    <header className="px-2 py-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-black text-2xl">KL SQUAD BUILDER</h1>

          <Teams />

          <ul
            className="items-center text-sm font-medium text-slate-300 
            bg-black rounded-lg sm:flex "
          >
            <li>
              <div className="px-4 py-2">
                <input
                  onChange={handleFieldChange}
                  id="DosTresUno"
                  type="radio"
                  value={"DosTresUno"}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor="DosTresUno"
                  className="w-full py-3 ml-2 text-sm font-medium text-slate-300"
                >
                  2 - 3 - 1
                </label>
              </div>
            </li>
            <li>
              <div className="px-4 py-2">
                <input
                  onChange={handleFieldChange}
                  id="tresDosUno"
                  type="radio"
                  value={"tresDosUno"}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 
                 focus:ring-blue-500 cursor-pointer"
                  defaultChecked
                />
                <label
                  htmlFor="tresDosUno"
                  className="w-full py-3 ml-2 text-sm font-medium text-slate-300"
                >
                  3 - 2 -1
                </label>
              </div>
            </li>
          </ul>
        </div>
    </header>
  );
};

export default Header;

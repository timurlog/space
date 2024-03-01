import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/json/data.json";

export default function PersonNavbar() {
  return (
    <div className="flex gap-8 pb-5">
      {data.crew.map((crew, index) => (
        <div key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-[50%] bg-white text-white uppercase tracking-wider text-sm lg:text-lg font-[comfortaa-bold]"
                : "rounded-[50%] bg-gray-600 text-gray-600 uppercase tracking-wider text-sm lg:text-lg hover:bg-white hover:text-white font-[comfortaa-bold]"
            }
            to={`/space/crew/${index}`}
          >
            ....
          </NavLink>
        </div>
      ))}
    </div>
  );
}

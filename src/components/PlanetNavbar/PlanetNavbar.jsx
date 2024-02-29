import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/json/data.json";

export default function PlanetNavbar() {
  return (
    <div className="flex gap-8 pb-5">
      {data.destinations.map((planet, index) => (
        <div key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-600 uppercase tracking-wider text-sm lg:text-lg font-[comfortaa-bold]"
                : "text-white uppercase tracking-wider text-sm lg:text-lg hover:text-gray-600 font-[comfortaa-bold]"
            }
            to={`/destination/${index}`}
          >
            {planet.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

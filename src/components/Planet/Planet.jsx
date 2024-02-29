import React from "react";
import PlanetNavbar from "../PlanetNavbar/PlanetNavbar";
import { useParams } from "react-router-dom";
import data from "../../assets/json/data.json";

export default function Planet() {
  const { planetId } = useParams();
  const planet = data.destinations[planetId];

  return (
    <div className="px-5 md:px-[50px] lg:px-24 flex flex-col-reverse lg:flex-row lg:pt-10 gap-3">
      <div className="flex justify-center items-center lg:w-[60%]">
        <img
          className="h-56 lg:h-96"
          src={
            new URL(
              `../../assets/image/destination/${planet.images.png}`,
              import.meta.url
            ).href
          }
          alt={planet.name}
        />
      </div>
      <div className="lg:w-[40%] lg:h-96">
        <PlanetNavbar />
        <div className="flex flex-col gap-3 lg:h-[340px] lg:justify-between">
          <p className="uppercase font-[bilie-eilish] text-white text-8xl leading-[96px] tracking-wider">
            {planet.name}
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            {planet.description}
          </p>
          <div className="h-[2px] w-full bg-gray-800"></div>
          <div className="lg:pl-[35%]">
            <p className="text-sm font-[comfortaa-bold]">EST. TRAVEL TIME</p>
            <p className="uppercase font-[bilie-eilish] text-white text-5xl tracking-wider">
              {planet.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

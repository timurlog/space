import React from "react";
import { Link } from "react-router-dom";

export default function DestinationErrorElement() {
  return (
    <div className="h-screen w-full flex flex-col justify-center gap-5 items-center text-center">
      <p className="font-[comfortaa-bold] text-9xl">Error 404</p>
      <p className="font-[comfortaa-bold] text-3xl pb-5">
        No planet here,{" "}
        <span className="font-[bilie-eilish] text-4xl">
          maybe in the correct space?
        </span>
      </p>
      <Link className="btn" to={"/space/destination/0"}>
        GO HERE
      </Link>
    </div>
  );
}

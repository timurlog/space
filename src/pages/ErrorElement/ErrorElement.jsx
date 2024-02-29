import React from "react";
import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <div className="h-screen w-full flex flex-col justify-center gap-5 items-center text-center">
      <p className="font-[comfortaa-bold] text-9xl">Error 404</p>
      <p className="font-[comfortaa-bold] text-3xl pb-5">
        Page not found,{" "}
        <span className="font-[bilie-eilish] text-4xl">
          maybe in the space?
        </span>
      </p>
      <Link className="btn" to={"/"}>
        HOME
      </Link>
    </div>
  );
}

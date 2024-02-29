import React from "react";

export default function PageTitle(props) {
  return (
    <div className="flex gap-5 px-5 py-5 font-[comfortaa-bold] tracking-wider text-lg md:px-[50px] lg:px-24 lg:text-4xl md:pt-10 lg:pt-14">
      <p>{props.num}</p>
      <p className="text-white">{props.txt}</p>
    </div>
  );
}

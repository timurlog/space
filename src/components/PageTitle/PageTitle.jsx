import React from "react";

export default function PageTitle(props) {
  return (
    <div className="flex gap-5 px-5 pt-5 font-[comfortaa-bold] tracking-wider text-lg md:px-[50px] lg:text-xl md:pt-10 lg:pt-14">
      <p>{props.num}</p>
      <p className="text-white">{props.txt}</p>
    </div>
  );
}

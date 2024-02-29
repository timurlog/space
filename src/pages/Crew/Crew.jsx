import React from "react";
import "./Crew.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export default function Crew() {
  return (
    <div className="Crew h-screen w-full">
      <Navbar activePage={"crew"} />
      <PageTitle num={"02"} txt={"MEET YOUR CREW"} />
    </div>
  );
}

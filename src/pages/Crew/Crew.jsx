import React from "react";
import "./Crew.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Crew() {
  return (
    <div className="Crew h-screen w-full">
      <Navbar activePage={"crew"} />
    </div>
  );
}
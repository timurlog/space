import React from "react";
import "./Destination.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Destination() {
  return (
    <div className="h-screen w-full">
      <Navbar activePage={"destination"} />
    </div>
  );
}
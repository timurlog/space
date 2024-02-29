import React from "react";
import "./Destination.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import { Outlet } from "react-router-dom";

export default function Destination() {
  return (
    <div className="Destination h-screen w-full">
      <Navbar activePage={"destination"} />
      <PageTitle num={"01"} txt={"PICK YOUR DESTINATION"} />
      <Outlet />
    </div>
  );
}

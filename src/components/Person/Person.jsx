import React from "react";
import PersonNavbar from "../PersonNavbar/PersonNavbar";
import data from "../../assets/json/data.json";
import { useParams } from "react-router-dom";

export default function Person() {
  const { crewId } = useParams();
  const crew = data.crew[crewId];

  return (
    <div>
      <PersonNavbar />
      <div></div>
    </div>
  );
}

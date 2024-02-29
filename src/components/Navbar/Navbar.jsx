import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import spaceLogo from "../../assets/image/shared/logo.svg";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const toggle = () => setShowMenu((prev) => !prev);
    document.getElementById("navToggle").addEventListener("click", toggle);

    return () =>
      document.getElementById("navToggle").removeEventListener("click", toggle);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-data">
          <Link to={"/"}>
            <img className="nav-logo" src={spaceLogo} alt="space logo" />
          </Link>
        </div>
        <div className="line-content">
          <div className="line"></div>
        </div>
        <div
          className={`nav-toggle ${showMenu ? "show-icon" : ""}`}
          id="navToggle"
        >
          <i className="fa-solid fa-bars nav-burger"></i>
          <i className="fa-solid fa-xmark nav-close"></i>
        </div>
        <div
          className={`nav-menu backdrop-blur-sm ${showMenu ? "show-menu" : ""}`}
          id="navMenu"
        >
          <ul className="nav-list">
            <li>
              <Link
                className={`nav-list-link ${
                  props.activePage == "home" ? "heActive" : ""
                } `}
                to={"/"}
              >
                00 HOME
              </Link>
            </li>
            <li>
              <Link
                className={`nav-list-link ${
                  props.activePage == "destination" ? "heActive" : ""
                } `}
                to={"/destination"}
              >
                01 DESTINATION
              </Link>
            </li>
            <li>
              <Link
                className={`nav-list-link ${
                  props.activePage == "crew" ? "heActive" : ""
                } `}
                to={"/crew"}
              >
                02 CREW
              </Link>
            </li>
            <li>
              <Link
                className={`nav-list-link ${
                  props.activePage == "technology" ? "heActive" : ""
                } `}
                to={"/technology"}
              >
                03 TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

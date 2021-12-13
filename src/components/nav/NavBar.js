import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <ul
      className="navbar"
      style={{ display: "flex-row", justifyContent: "space-evenly" }}
    >
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/Loadouts">
          Loadouts
        </Link>
      </li>
    </ul>
  );
};

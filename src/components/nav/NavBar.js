import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/Armory">
          Armory
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/Loadouts">
          Loadouts
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/Loadouts/Create">
          Create Loadout
        </Link>
      </li>
    </ul>
  );
};

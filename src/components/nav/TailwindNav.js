import React from "react";
import { Link } from "react-router-dom";
import {
  GiSwitchWeapon,
  GiSwordSmithing,
  GiBrutalHelm,
  GiSwordsEmblem,
} from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

const NavBarIcon = ({ icon, link, text }) => (
  <div className="navbar-icon group">
    <Link to={link}>{icon}</Link>
    <span className="navbar-tooltip group-hover:scale-100">
      <Link to={link}>{text}</Link>
    </span>
  </div>
);

const NavBarLogout = ({ icon, clicky, text }) => (
  <div className="navbar-icon group">
    <Link to="#" onClick={clicky}>
      {icon}
    </Link>
    <span className="navbar-tooltip group-hover:scale-100">
      <Link to="#" onClick={clicky}>
        {text}
      </Link>
    </span>
  </div>
);

export const TailwindNav = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg lg:w-screen lg:h-16 lg:flex-row z-[1]">
      <NavBarIcon
        icon={<GiBrutalHelm size="28" />}
        text={"Armory"}
        link={"/Armory"}
      />
      <NavBarIcon
        icon={<GiSwitchWeapon size="28" />}
        text={"Loadouts"}
        link={"/Loadouts"}
      />
      <NavBarIcon
        icon={<GiSwordSmithing size="28" />}
        text={"Create Loadout"}
        link={"/Loadouts/Create"}
      />
      <NavBarLogout
        icon={<AiOutlineLogout size="28" />}
        clicky={() => {
          localStorage.removeItem("dloh_token");
        }}
        text={"Logout"}
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetLoadouts, deleteLoadout } from "./LoadoutManager";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import "./Loadouts.css";

export const Loadouts = () => {
  const [loadouts, setLoadouts] = useState([]);
  const [loadout, setLoadout] = useState({});
  const history = useHistory();

  useEffect(() => {
    GetLoadouts().then((data) => setLoadouts(data));
  }, []);

  const LoadoutIcon = ({ icon, clicky, text }) => (
    <div className="loadout-icon group">
      <button onClick={clicky}>{icon}</button>
      <span className="loadout-tooltip group-hover:scale-100">
        <button onClick={clicky}>{text}</button>
      </span>
    </div>
  );

  return (
    <div className="container-container">
      <div>{/* <h1>{username.dloh_user.user.username}'s Loadouts</h1> */}</div>
      {loadouts.map((loadout) => {
        return (
          <div className="loadout-container" key={loadout.id} id={loadout.id}>
            <div className="loadout-name">{loadout.name}</div>
            {loadout?.destiny_items_list.map((i) => {
              return (
                <div className="loadout-item" id={i.id}>
                  <img
                    className="loadout-img"
                    src={`https://www.bungie.net${i.icon}`}
                    alt={i.name}
                  />
                  <div className="loadout-item-name">{i.name}</div>
                </div>
              );
            })}
            <div className="loadout-btns-container">
              <LoadoutIcon
                icon={<BiEditAlt size="26" />}
                clicky={() => {
                  history.push(`/Loadouts/Edit/${loadout.id}`);
                }}
                text={"Edit Loadout"}
              />
              <LoadoutIcon
                icon={<MdDeleteForever size="26" />}
                clicky={() => {
                  deleteLoadout(loadout.id);
                  GetLoadouts().then((data) => setLoadouts(data));
                }}
                text={"Delete Loadout"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

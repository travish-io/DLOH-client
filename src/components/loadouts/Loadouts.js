import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetLoadouts, deleteLoadout } from "./LoadoutManager";
import "./Loadouts.css";

export const Loadouts = () => {
  const [loadouts, setLoadouts] = useState([]);
  const [loadout, setLoadout] = useState({});
  const history = useHistory();

  useEffect(() => {
    GetLoadouts().then((data) => setLoadouts(data));
  }, []);

  return (
    <div className="container-container">
      <div>{/* <h1>{username.dloh_user.user.username}'s Loadouts</h1> */}</div>
      {loadouts.map((loadout) => {
        return (
          <div className="loadout-container" key={loadout.id} id={loadout.id}>
            <div className="loadout-name">
              <Link to={`/Loadouts/Edit/${loadout.id}`}>{loadout.name}</Link>
            </div>
            {loadout?.destiny_items_list.map((i) => {
              return (
                <div className="loadout-item" id={i.id}>
                  <div
                    className="loadout-item-icon"
                    key={loadout.id}
                    id={i.item_hash}
                  >
                    <img src={`https://www.bungie.net${i.icon}`} alt={i.name} />
                  </div>
                  <div className="loadout-item-name">{i.name}</div>
                </div>
              );
            })}
            <div className="loadout-btns-container">
              <div className="loadout-btn">
                <button>Edit</button>
              </div>
              <div className="loadout-btn">
                <button
                  onClick={() => {
                    deleteLoadout(loadout.id);
                    GetLoadouts().then((data) => setLoadouts(data));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

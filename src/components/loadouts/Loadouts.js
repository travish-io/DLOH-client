import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetLoadouts } from "./LoadoutManager";

export const Loadouts = () => {
  const [loadouts, setLoadouts] = useState([]);
  // const username = loadouts.filter((l) => {
  //   debugger;
  //   return l.id === 1;
  // });

  useEffect(() => {
    GetLoadouts().then((data) => setLoadouts(data));
  }, []);

  return (
    <div>
      <div>{/* <h1>{username.dloh_user.user.username}'s Loadouts</h1> */}</div>
      {loadouts.map((loadout) => {
        return (
          <div className="loadout-container" key={loadout.id} id={loadout.id}>
            <div className="loadout-name">{loadout.name}</div>
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
          </div>
        );
      })}
    </div>
  );
};

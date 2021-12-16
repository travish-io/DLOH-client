import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Armory } from "../armory/Armory";
import { Create } from "./LoadoutManager";

// fetch loadout_items. Add AddLoadoutItem fn to armorymanager and add to item click
export const CreateLoadout = () => {
  const [loadoutItemsList, setLoadoutItemsList] = useState([]);
  const [item, setItem] = useState(0);

  useEffect(() => {}, []);
  // make list of items
  return (
    <div>
      <div
        className="new-loadout-container"
        style={{ border: "1px black solid" }}
      >
        <div
          className="new-item-container"
          style={{
            min_width: "96px",
            min_height: "96px",
            // border: "solid 1px black",
            display: "flex",
          }}
        >
          {loadoutItemsList.length > 0
            ? loadoutItemsList.map((item) => {
                return (
                  <div
                    id={item?.id}
                    key={item?.hash}
                    className="item-container"
                  >
                    <input
                      type={"checkbox"}
                      className="item-checkbox"
                      id={item?.id}
                      onChange={(evt) => {
                        setLoadoutItemsList(
                          loadoutItemsList.filter(
                            (item) => item.id !== parseInt(evt.target.id)
                          )
                        );
                      }}
                    ></input>
                    <img
                      src={`https://www.bungie.net${item?.icon}`}
                      className="armory-item-icon"
                      alt={item?.name}
                      id={item?.id}
                    />
                  </div>
                );
              })
            : ""}
        </div>
        <div>
          <button
            onClick={() => {
              Create(loadoutItemsList);
              setLoadoutItemsList([]);
            }}
          >
            Save Loadout
          </button>
        </div>
      </div>
      <Armory
        loadoutItemsList={loadoutItemsList}
        setLoadoutItemsList={setLoadoutItemsList}
      />
    </div>
  );
};

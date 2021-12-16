import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Armory } from "../armory/Armory";
import { Create, editLoadout, GetLoadout } from "./LoadoutManager";

export const CreateLoadout = () => {
  const [loadoutItemsList, setLoadoutItemsList] = useState([]);
  const [loadout, setLoadout] = useState({});
  const history = useHistory();
  const { loadoutId } = useParams();

  useEffect(() => {
    if (history.location.pathname === `/Loadouts/Edit/${loadoutId}`) {
      GetLoadout(loadoutId).then((data) => {
        setLoadout(data);
        setLoadoutItemsList(data.destiny_items_list);
      });
    }
  }, []);

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
          {loadoutItemsList?.length > 0
            ? loadoutItemsList?.map((item) => {
                return (
                  <div
                    id={item?.id}
                    key={item?.hash}
                    className="item-container"
                  >
                    <button
                      type={"checkbox"}
                      className="item-checkbox"
                      id={item?.id}
                      onClick={(evt) => {
                        setLoadoutItemsList(
                          loadoutItemsList.filter(
                            (item) => item?.id !== parseInt(evt.target.id)
                          )
                        );
                      }}
                    >
                      <img
                        src={`https://www.bungie.net${item?.icon}`}
                        className="armory-item-icon"
                        alt={item?.name}
                        id={item?.id}
                      />
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
        <div>
          {history.location.pathname === `/Loadouts/Edit/${loadoutId}` ? (
            <button
              onClick={() => {
                editLoadout(loadoutId, loadoutItemsList).then(
                  history.push("/Loadouts")
                );
                // setLoadout()
                // setLoadoutItemsList([]);
                // something like this...
                // finish edit fn and probably redirect to /Loadouts instead of setting data
              }}
            >
              Update Loadout
            </button>
          ) : (
            <button
              onClick={() => {
                Create(loadoutItemsList);
                setLoadoutItemsList([]);
              }}
            >
              Save Loadout
            </button>
          )}
        </div>
      </div>
      <Armory
        loadoutItemsList={loadoutItemsList}
        setLoadoutItemsList={setLoadoutItemsList}
      />
    </div>
  );
};

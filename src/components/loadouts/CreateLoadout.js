import React, { useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Loadouts.css";
import { Armory } from "../armory/Armory";
import { Create, editLoadout, GetLoadout, GetLoadouts } from "./LoadoutManager";

export const CreateLoadout = () => {
  const [loadoutItemsList, setLoadoutItemsList] = useState([]);
  const [loadout, setLoadout] = useState({});
  const newItemObj = useRef();
  const history = useHistory();
  const { loadoutId } = useParams();

  useEffect(() => {
    if (history.location.pathname === `/Loadouts/Edit/${loadoutId}`) {
      GetLoadout(loadoutId).then((data) => {
        setLoadoutItemsList(data.destiny_items_list);
        setLoadout(data);
      });
    }
  }, []);

  const LoadoutItem = ({ icon, hash, id, name, bucket_hash, type }) => (
    <div id={bucket_hash} key={id} className="item-container">
      <img
        src={`https://www.bungie.net${icon}`}
        className="armory-item-icon"
        alt={name}
        id={id}
        key={id}
        onClick={(evt) => {
          setLoadoutItemsList(
            loadoutItemsList.filter(
              (item) => item.id !== parseInt(evt.target.id)
            )
          );
        }}
      />
    </div>
  );

  return (
    <div>
      <div className="sticky top-14 left-0 right-0 m-6">
        <div
          className="new-loadout-container"
          draggable="true"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            console.log(loadoutItemsList);
            console.log(newItemObj.current.type);
            if (loadoutItemsList.length >= 4) {
              return window.alert("All item slots are full.");
            }
            for (var { bucket_hash: x } of loadoutItemsList) {
              for (var { type: y } of loadoutItemsList) {
                if (
                  x === newItemObj.current.bucket_hash ||
                  y === newItemObj.current.type
                ) {
                  return window.alert(
                    "That item slot has already been filled."
                  );
                }
              }
            }
            return setLoadoutItemsList((loadoutItemsList) => [
              ...loadoutItemsList,
              newItemObj.current,
            ]);
          }}
        >
          <div className="new-item-container" id="1498876634">
            {loadoutItemsList.map((i) => {
              if (i.bucket_hash === 1498876634) {
                return (
                  <LoadoutItem
                    icon={i.icon}
                    hash={i.item_hash}
                    id={i.id}
                    name={i.name}
                    bucket_hash={i.bucket_hash}
                    type={i.item_type_tier_name}
                  />
                );
              }
            })}
            Kinetic Weapon Slot
          </div>
          <div className="new-item-container" id="2465295065">
            {loadoutItemsList.map((i) => {
              if (i.bucket_hash === 2465295065) {
                return (
                  <LoadoutItem
                    icon={i.icon}
                    hash={i.item_hash}
                    id={i.id}
                    name={i.name}
                    bucket_hash={i.bucket_hash}
                    type={i.item_type_tier_name}
                  />
                );
              }
            })}
            Energy Weapon Slot
          </div>
          <div className="new-item-container" id="953998645">
            {loadoutItemsList.map((i) => {
              if (i.bucket_hash === 953998645) {
                console.log(i);
                console.log(loadoutItemsList);
                return (
                  <LoadoutItem
                    icon={i.icon}
                    hash={i.item_hash}
                    id={i.id}
                    name={i.name}
                    bucket_hash={i.bucket_hash}
                    type={i.item_type_tier_name}
                  />
                );
              }
            })}
            Heavy Weapon Slot
          </div>
          <div className="new-item-container" id="exoticArmorSlot">
            {history.location.pathname === `/Loadouts/Edit/${loadoutId}`
              ? loadoutItemsList.map((i) => {
                  if (
                    i.type === "Exotic Armor" ||
                    i.item_type_tier_name === "Exotic Helmet" ||
                    i.item_type_tier_name === "Exotic Leg Armor" ||
                    i.item_type_tier_name === "Exotic Gauntlets" ||
                    i.item_type_tier_name === "Exotic Chest Armor"
                  ) {
                    return (
                      <LoadoutItem
                        icon={i.icon}
                        hash={i.item_hash}
                        id={i.id}
                        name={i.name}
                        bucket_hash={i.bucket_hash}
                        type={i.item_type_tier_name}
                      />
                    );
                  }
                })
              : loadoutItemsList.map((i) => {
                  if (i.type === "Exotic Armor") {
                    return (
                      <LoadoutItem
                        icon={i.icon}
                        hash={i.item_hash}
                        id={i.id}
                        name={i.name}
                        bucket_hash={i.bucket_hash}
                        type={i.item_type_tier_name}
                      />
                    );
                  }
                })}
            Exotic Armor Slot
          </div>

          <div>
            {history.location.pathname === `/Loadouts/Edit/${loadoutId}` ? (
              <button
                onClick={() => {
                  editLoadout(loadoutId, loadoutItemsList).then(
                    history.push("/Loadouts")
                  );
                }}
              >
                Update Loadout
              </button>
            ) : (
              <button
                onClick={() => {
                  Create(loadoutItemsList);
                  setLoadoutItemsList([]);
                  GetLoadouts();
                  history.push("/Loadouts");
                }}
              >
                Save Loadout
              </button>
            )}
          </div>
        </div>
      </div>
      <Armory
        loadoutItemsList={loadoutItemsList}
        setLoadoutItemsList={setLoadoutItemsList}
        newItemObj={newItemObj}
      />
    </div>
  );
};

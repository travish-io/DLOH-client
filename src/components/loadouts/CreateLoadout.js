import React, { useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Loadouts.css";
import { Armory } from "../armory/Armory";
import { Create, editLoadout, GetLoadout, GetLoadouts } from "./LoadoutManager";
import { GiSwordsPower } from "react-icons/gi";
import "./pofessional-ammo-icon.png";
import "./exotic-armor-icon.png";

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

  const LoadoutIcon = ({ icon, clicky, text }) => (
    <button className="create-icon group" onClick={clicky}>
      {icon}
      <span className="create-tooltip group-hover:scale-100">
        <button onClick={clicky}>{text}</button>
      </span>
    </button>
  );

  const LoadoutItem = ({ icon, hash, id, name, bucket_hash, type }) => (
    <img
      src={`https://www.bungie.net${icon}`}
      className="armory-item-icon"
      alt={name}
      id={id}
      key={id}
      onClick={(evt) => {
        setLoadoutItemsList(
          loadoutItemsList.filter((item) => item.id !== parseInt(evt.target.id))
        );
      }}
    />
  );

  return (
    <div>
      <div className="sticky top-0 lg:top-16 left-0 right-0 bg-white lg:mt-24">
        <div
          className="new-loadout-container"
          draggable="true"
          onDragOver={(e) => e.preventDefault()}
          onTouchEnd={(e) => {
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
            <img
              className="h-[63px] w-[68px] mt-[17px] ml-[6px]"
              src={require("./pofessional-ammo-icon.png").default}
              alt="Destiny 2 Primary ammo"
            />
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
            <img
              className="h-[72px] w-[60px]"
              src="https://www.blueberries.gg/wp-content/uploads/2020/08/Destiny-2-special-ammo-e1597420908657.png"
              alt="Destiny 2 special ammo"
            />
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
            {
              <img
                className="h-[72px] w-[60px]"
                src="https://www.blueberries.gg/wp-content/uploads/2020/08/Destiny-2-Heavy-ammo-e1597420989545.png"
                alt="Destiny 2 Heavy ammo"
              ></img>
            }
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
        </div>
        <div className="translate-y-[-20px]">
          {history.location.pathname === `/Loadouts/Edit/${loadoutId}` ? (
            <LoadoutIcon
              icon={<GiSwordsPower size="26" />}
              clicky={() => {
                editLoadout(loadoutId, loadoutItemsList, loadout.name).then(
                  history.push("/Loadouts")
                );
              }}
              text={"Update Loadout"}
            />
          ) : (
            <LoadoutIcon
              icon={<GiSwordsPower size="26" />}
              clicky={() => {
                Create(loadoutItemsList);
                setLoadoutItemsList([]);
                GetLoadouts();
                history.push("/Loadouts");
              }}
              text={"Save Loadout"}
            />
          )}
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

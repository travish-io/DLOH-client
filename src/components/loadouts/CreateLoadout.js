import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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

  const LoadoutItem = ({ icon, hash, id, name, bucket_hash }) => (
    <div id={bucket_hash} key={id} className="item-container">
      <button
        className="item-checkbox"
        id={id}
        onClick={(evt) => {
          setLoadoutItemsList(
            loadoutItemsList.filter(
              (item) => item.id !== parseInt(evt.target.id)
            )
          );
        }}
      >
        <img
          src={`https://www.bungie.net${icon}`}
          className="armory-item-icon"
          alt={name}
          id={id}
        />
      </button>
    </div>
  );

  return (
    <div>
      <div
        className="new-loadout-container"
        style={{
          border: "1px black solid",
          display: "flex",
          justifyContent: "center",
        }}
        draggable="true"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          for (var { bucket_hash: x } of loadoutItemsList) {
            if (x === newItemObj.current.bucket_hash) {
              return window.alert("That item slot has already been filled.");
            }
          }
          return setLoadoutItemsList((loadoutItemsList) => [
            ...loadoutItemsList,
            newItemObj.current,
          ]);
        }}
      >
        <div
          className="new-item-container"
          style={{
            width: "96px",
            height: "96px",
            border: "solid 1px black",
            display: "flex",
          }}
          id="1498876634"
        >
          {loadoutItemsList.map((i) => {
            if (i.bucket_hash == "1498876634") {
              return (
                <LoadoutItem
                  icon={i.icon}
                  hash={i.item_hash}
                  id={i.id}
                  name={i.name}
                  bucket_hash={i.bucket_hash}
                />
              );
            }
          })}
          Kinetic Weapon Slot
        </div>
        <div
          className="new-item-container"
          style={{
            width: "96px",
            height: "96px",
            border: "solid 1px black",
            display: "flex",
          }}
          id="2465295065"
        >
          {loadoutItemsList.map((i) => {
            if (i.bucket_hash == "2465295065") {
              return (
                <LoadoutItem
                  icon={i.icon}
                  hash={i.item_hash}
                  id={i.id}
                  name={i.name}
                  bucket_hash={i.bucket_hash}
                />
              );
            }
          })}
          Energy Weapon Slot
        </div>
        <div
          className="new-item-container"
          style={{
            width: "96px",
            height: "96px",
            border: "solid 1px black",
            display: "flex",
          }}
          id="953998645"
        >
          {loadoutItemsList.map((i) => {
            if (i.bucket_hash == "953998645") {
              return (
                <LoadoutItem
                  icon={i.icon}
                  hash={i.item_hash}
                  id={i.id}
                  name={i.name}
                  bucket_hash={i.bucket_hash}
                />
              );
            }
          })}
          Heavy Weapon Slot
        </div>
        <div
          className="new-item-container"
          style={{
            width: "96px",
            height: "96px",
            border: "solid 1px black",
            display: "flex",
          }}
          id="exoticArmorSlot"
        >
          {loadoutItemsList.map((i) => {
            if (
              i.bucket_hash != "953998645" &&
              i.bucket_hash != "2465295065" &&
              i.bucket_hash != "1498876634"
            ) {
              return (
                <LoadoutItem
                  icon={i.icon}
                  hash={i.item_hash}
                  id={i.id}
                  name={i.name}
                  bucket_hash={i.bucket_hash}
                />
              );
            }
          })}
          Exotic Armor Slot
        </div>
        <div>
          {/* {loadoutItemsList?.length > 0
            ? loadoutItemsList?.map((item) => {
                return (
                  <div
                    id={item?.bucket}
                    key={item?.id}
                    className="item-container"
                  >
                    <button
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
            : ""} */}
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
      <Armory
        loadoutItemsList={loadoutItemsList}
        setLoadoutItemsList={setLoadoutItemsList}
        newItemObj={newItemObj}
      />
    </div>
  );
};

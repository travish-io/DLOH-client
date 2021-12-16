import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetArmoryItems, GetArmoryItem, ArmorySearch } from "./ArmoryManager";
import "./Armory.css";
import { ArmoryDetail } from "./ArmoryDetail";

export const Armory = ({ loadoutItemsList, setLoadoutItemsList }) => {
  const [items, setItems] = useState([]);
  const [search, updateSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    ArmorySearch(search).then((data) => setItems(data));
  }, [search]);

  const LoadoutItem = ({ icon, hash, id, name }) => (
    <div id={id} key={hash} className="item-container">
      <input
        type={"checkbox"}
        className="item-checkbox"
        id={id}
        onChange={() => {
          const newItemObj = {
            icon: icon,
            hash: hash,
            id: id,
            name: name,
          };
          return setLoadoutItemsList((loadoutItemsList) => [
            ...loadoutItemsList,
            newItemObj,
          ]);
        }}
      ></input>
      <img
        src={`https://www.bungie.net${icon}`}
        className="armory-item-icon"
        alt={name}
        id={id}
      />
    </div>
  );
  const ArmoryItem = ({ icon, hash, id, name }) => (
    <div id={id} key={hash}>
      <Link
        target={"_blank"}
        rel="noopender noreferrer"
        to={`/${hash}`}
        id={id}
      >
        <img
          src={`https://www.bungie.net${icon}`}
          className="armory-item-icon"
          alt={name}
        />
      </Link>
      {/* <span className="item-tooltip">
          {name} Details
      </span> */}
    </div>
  );
  return (
    <div>
      <div className="search-container">
        <input
          className="armory-searchbar"
          type="text"
          placeholder="Search for items by name, type or rarity. Ex: 'Exotic Hand Cannon'"
          value={search}
          onChange={(evt) => {
            evt.preventDefault();
            updateSearch(evt.target.value);
          }}
        ></input>
      </div>
      <div className="search-results-container">
        <div className="search-results">
          {history.location.pathname === "/Loadouts/Create"
            ? items
                .map((i) => {
                  return (
                    <LoadoutItem
                      icon={i.icon}
                      hash={i.item_hash}
                      id={i.id}
                      name={i.name}
                    />
                  );
                })
                .reverse()
            : items
                .map((i) => {
                  return (
                    <ArmoryItem
                      icon={i.icon}
                      hash={i.item_hash}
                      id={i.id}
                      name={i.name}
                    />
                  );
                })
                .reverse()}
        </div>
      </div>
    </div>
  );
};

// <div
//   className="armory-item-icon"
//   key={i.id}
//   id={i.item_hash}
//   onClick={(evt) => {
//     console.log(evt.target.id);
//   }}
// >
//   {/* <Link
//   to={`/${i.item_hash}`}
//    id={i.id}> */}
//   <img
//     src={`https://www.bungie.net${i.icon}`}
//     className="icon"
//     alt={i.name}
//   />
//   {/* </Link> */}
// </div>

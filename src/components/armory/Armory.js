import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { ArmorySearch } from "./ArmoryManager";
import { ArmoryDetail } from "./ArmoryDetail";
import "./Armory.css";

export const Armory = ({ loadoutItemsList, setLoadoutItemsList }) => {
  const [items, setItems] = useState([]);
  const [search, updateSearch] = useState("");
  const ref = useRef();
  const [toggleDetail, setToggleDetail] = useState(false);
  const history = useHistory();

  useEffect(() => {
    ArmorySearch(search).then((data) => setItems(data));
  }, [search]);

  const LoadoutItem = ({ icon, hash, id, name, bucket }) => (
    <div id={id} key={hash} className="item-container">
      <button
        // type={"checkbox"}
        className="item-checkbox"
        id={id}
        onClick={() => {
          const newItemObj = {
            icon: icon,
            hash: hash,
            id: id,
            name: name,
            bucket: bucket,
          };
          return setLoadoutItemsList((loadoutItemsList) => [
            ...loadoutItemsList,
            newItemObj,
          ]);
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
  const ArmoryItem = ({ icon, hash, id, name }) => (
    <div id={id} key={hash}>
      <Link
        to={`/Armory/${hash}`}
        id={id}
        onClick={setToggleDetail(!toggleDetail)}
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
          ref={ref}
          onChange={(evt) => {
            evt.preventDefault();
            updateSearch(ref.current.value);
          }}
        ></input>
      </div>
      <div>{toggleDetail ? <ArmoryDetail /> : ""}</div>
      <div className="search-results-container">
        <div className="search-results">
          {history.location.pathname !== "/Armory"
            ? items
                .map((i) => {
                  return (
                    <LoadoutItem
                      icon={i.icon}
                      hash={i.item_hash}
                      id={i.id}
                      name={i.name}
                      bucket={i.bucket_hash}
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

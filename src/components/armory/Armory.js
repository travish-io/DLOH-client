import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetArmoryItems, GetArmoryItem, ArmorySearch } from "./ArmoryManager";
import "./Armory.css";

export const Armory = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [search, updateSearch] = useState("");

  useEffect(() => {
    ArmorySearch(search).then((data) => setItems(data));
  }, [search]);

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
          {items
            .map((i) => {
              return (
                <div className="armory-item-icon" key={i.id} id={i.item_hash}>
                  <Link to={`/${i.item_hash}`}>
                    <img src={`https://www.bungie.net${i.icon}`} alt={i.name} />
                  </Link>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

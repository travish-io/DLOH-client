import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ArmorySearch } from "./ArmoryManager";
import { ArmoryDetail } from "./ArmoryDetail";
import "./Armory.css";

export const Armory = ({
  loadoutItemsList,
  setLoadoutItemsList,
  newItemObj,
}) => {
  const [items, setItems] = useState([]);
  const [search, updateSearch] = useState("");
  const [itemHash, setItemHash] = useState("");
  const [toggleDetail, setToggleDetail] = useState(false);
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    ArmorySearch(search).then((data) => setItems(data));
  }, [search]);

  const closeDetail = () => {
    setToggleDetail(false);
  };

  const ArmoryItem = ({ icon, hash, id, name, bucket_hash, type }) => (
    <img
      src={`https://www.bungie.net${icon}`}
      className="armory-item-icon"
      alt={name}
      id={id}
      key={id}
      draggable="true"
      onTouchStart={(e) => {
        console.log("touch");
        console.log(e.target.id);
        // e.stopPropagation();
      }}
      onTouchMove={(e) => {
        console.log("touch move");
        e.stopPropagation();
        document.body.style.overflow = "hidden";
        if (history.location.pathname !== "/Armory") {
          if (
            type === "Exotic Helmet" ||
            type === "Exotic Leg Armor" ||
            type === "Exotic Gauntlets" ||
            type === "Exotic Chest Armor"
          ) {
            newItemObj.current = {
              icon: icon,
              hash: hash,
              id: id,
              name: name,
              bucket_hash: bucket_hash,
              type: "Exotic Armor",
            };
          } else {
            newItemObj.current = {
              icon: icon,
              hash: hash,
              id: id,
              name: name,
              bucket_hash: bucket_hash,
              type: type,
            };
          }
        }
      }}
      onTouchEnd={() => {
        document.body.style.overflow = "auto";
      }}
      onDragStart={() => {
        // debugger;
        if (history.location.pathname !== "/Armory") {
          if (
            type === "Exotic Helmet" ||
            type === "Exotic Leg Armor" ||
            type === "Exotic Gauntlets" ||
            type === "Exotic Chest Armor"
          ) {
            newItemObj.current = {
              icon: icon,
              hash: hash,
              id: id,
              name: name,
              bucket_hash: bucket_hash,
              type: "Exotic Armor",
            };
          } else {
            newItemObj.current = {
              icon: icon,
              hash: hash,
              id: id,
              name: name,
              bucket_hash: bucket_hash,
              type: type,
            };
          }
        }
      }}
      onClick={() => {
        setItemHash(hash);
        setToggleDetail(true);
      }}
    />
  );

  return (
    <div className="">
      <div className="">
        {history.location.pathname !== "/Armory" ? (
          <div className="sticky lg:top-[20.25rem] top-[16rem] left-0 right-0 flex justify-center z-[1]">
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
        ) : (
          <div className="sticky top-[0.5rem] lg:top-14 left-0 right-0 flex justify-center z-[1]">
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
        )}

        {toggleDetail ? (
          <ArmoryDetail itemHash={itemHash} closeDetail={closeDetail} />
        ) : (
          ""
        )}

        <div className="">
          <div className="search-results">
            {items
              .map((i) => {
                return (
                  <ArmoryItem
                    icon={i.icon}
                    hash={i.item_hash}
                    id={i.id}
                    name={i.name}
                    bucket_hash={i.bucket_hash}
                    type={i.item_type_tier_name}
                  />
                );
              })
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

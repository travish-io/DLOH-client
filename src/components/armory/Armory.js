import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
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

  const ArmoryItem = ({ icon, hash, id, name, bucket_hash }) => (
    <div id={id} key={hash} className="item-container">
      <button
        className="item-checkbox"
        id={bucket_hash}
        onClick={() => {
          setItemHash(hash);
          setToggleDetail(true);
        }}
      >
        <img
          src={`https://www.bungie.net${icon}`}
          className="armory-item-icon"
          alt={name}
          id={id}
          onDragStart={() => {
            if (history.location.pathname !== "/Armory") {
              newItemObj.current = {
                icon: icon,
                hash: hash,
                id: id,
                name: name,
                bucket_hash: bucket_hash,
              };
            }
          }}
          onDrag={() => {
            if (history.location.pathname !== "/Armory") {
              console.log(newItemObj.current);
            }
          }}
        />
      </button>
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
      <div>
        {toggleDetail ? (
          <ArmoryDetail itemHash={itemHash} closeDetail={closeDetail} />
        ) : (
          ""
        )}
      </div>
      <div className="search-results-container">
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
                />
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

// const ArmoryItem = ({ icon, hash, id, name }) => (
//   <div id={id} key={hash}>
//     <button
//       id={id}
//       onClick={() => {
//         setItemHash(hash);
//         setToggleDetail(true);
//       }}
//     >
//       <img
//         src={`https://www.bungie.net${icon}`}
//         className="armory-item-icon"
//         alt={name}
//       />
//     </button>
//     {/* <span className="item-tooltip">
//         {name} Details
//     </span> */}
//   </div>
// );
// const newItemObj = {
//   icon: icon,
//   hash: hash,
//   id: id,
//   name: name,
//   bucket: bucket,
// };
// return setLoadoutItemsList((loadoutItemsList) => [
//   ...loadoutItemsList,
//   newItemObj,
// ]);

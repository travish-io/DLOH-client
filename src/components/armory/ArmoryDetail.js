import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ArmoryManager from "./ArmoryManager";
import "./Armory.css";

export const ArmoryDetail = () => {
  const [item, setItem] = useState({});
  const { itemHash } = useParams();

  useEffect(() => {
    ArmoryManager.GetArmoryItemDetails(itemHash).then((data) => setItem(data));
  }, []);

  return (
    <div>
      <h3>{item?.Response?.displayProperties?.name}</h3>
      <img
        src={`https://www.bungie.net${item?.Response?.displayProperties?.icon}`}
        alt={item?.Response?.displayProperties?.name}
      ></img>
      <h4>{item?.Response?.flavorText}</h4>
    </div>
  );
};

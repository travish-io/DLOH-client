import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  GetArmoryItemDetails,
  itemPerkDefinitions,
  StatsEnum,
} from "./ArmoryManager";
import "./Armory.css";

export const ArmoryDetail = () => {
  const [item, setItem] = useState({});
  const [perkDefinitions, setPerkDefinitions] = useState([]);
  const { itemHash } = useParams();

  useEffect(() => {
    GetArmoryItemDetails(itemHash).then((data) => setItem(data));
    itemPerkDefinitions().then((data) => setPerkDefinitions(data));
  }, []);

  return (
    <div>
      <h3>{item?.Response?.displayProperties?.name}</h3>
      <img
        src={`https://www.bungie.net${item?.Response?.displayProperties?.icon}`}
        alt={item?.Response?.displayProperties?.name}
      ></img>
      <h6>{item?.Response?.itemTypeAndTierDisplayName}</h6>
      <div>
        {item?.Response?.investmentStats.map((stat) => {
          for (const i of StatsEnum) {
            if (stat?.statTypeHash === parseInt(i?.stat) && stat?.value > 0) {
              return (
                <div>
                  {i?.name}: {stat?.value}
                </div>
              );
            }
          }
        })}
      </div>
      <h4>{item?.Response?.flavorText}</h4>
    </div>
  );
};

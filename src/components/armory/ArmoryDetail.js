import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  GetArmoryItemDetails,
  itemPerkDefinitions,
  StatsEnum,
} from "./ArmoryManager";
import "./Armory.css";

export const ArmoryDetail = ({ itemHash, closeDetail }) => {
  const [item, setItem] = useState({});
  const [perkDefinitions, setPerkDefinitions] = useState([]);
  const history = useHistory();
  useEffect(() => {
    GetArmoryItemDetails(itemHash).then((data) => setItem(data));
    itemPerkDefinitions().then((data) => setPerkDefinitions(data));
  }, [itemHash]);

  return (
    <div
      className={`sticky ${
        history.location.pathname === "/Armory"
          ? "top-[4rem]"
          : "top-[16.5rem] lg:top-[20.5rem] flex bg-white"
      }`}
    >
      <div className="flex flex-col ">
        {console.log(itemHash)}
        <div className="w-[50px]">
          <button
            className="navbar-icon"
            onClick={() => {
              return closeDetail();
            }}
          >
            Close
          </button>
        </div>
        <div>
          <h3>{item?.Response?.displayProperties?.name}</h3>
        </div>
        <div>
          <img
            src={`https://www.bungie.net${item?.Response?.displayProperties?.icon}`}
            alt={item?.Response?.displayProperties?.name}
          />
        </div>
        <h6>{item?.Response?.itemTypeAndTierDisplayName}</h6>
        <div className="flex flex-wrap flex-col max-h-[150px] content-start gap-x-[1rem]">
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
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ArmoryManager from "./ArmoryManager";
import "./Armory.css";

export const ArmoryDetail = () => {
  const [item, setItem] = useState({});
  const { itemHash } = useParams();

  useEffect(() => {
    ArmoryManager.GetArmoryItemDetails(itemHash).then((data) => setItem(data));
  }, [itemHash]);

  class StatsEnum {
    HANDICAP = "2341766298";
    VOID_COST = "2399985800";
    VELOCITY = "2523465841";
    RECOIL_DIRECTION = "2715839340";
    SCORE_MULTIPLIER = "2733264856";
    EFFICIENCY = "2762071195";
    SWING_SPEED = "2837207746";
    CHARGE_TIME = "2961396640";
    MOBILITY = "2996146975";
    BOOST = "3017642079";
    POWER_BONUS = "3289069874";
    SOLAR_COST = "3344745325";
    ZOOM = "3555269338";
    ANY_ENERGY_TYPE_COST = "3578062600";
    PRECISION_DAMAGE = "3597844532";
    BLAST_RADIUS = "3614673599";
    ARC_ENERGY_CAPACITY = "3625423501";
    ARC_COST = "3779394102";
    MAGAZINE = "3871231066";
    DEFENSE = "3897883278";
    MOVE_SPEED = "3907551967";
    TIME_TO_AIM_DOWN_SIGHTS = "3988418950";
    IMPACT = "4043523819";
    RELOAD_SPEED = "4188031367";
    STRENGTH = "4244567218";
    ROUNDS_PER_MINUTE = "4284893193";
    VOID_ENERGY_CAPACITY = "16120457";
    INTELLECT = "144602215";
    STABILITY = "155624089";
    DEFENSE = "209426660";
    DURABILITY = "360359141";
    RESILIENCE = "392767087";
    DRAW_TIME = "447667954";
    AMMO_CAPACITY = "925767036";
    HANDLING = "943549884";
    RANGE = "1240592695";
    AIM_ASSISTANCE = "1345609583";
    ATTACK = "1480404414";
    SPEED = "1501155019";
    HEROIC_RESISTANCE = "1546607977";
    ARC_DAMAGE_RESISTANCE = "1546607978";
    SOLAR_DAMAGE_RESISTANCE = "1546607979";
    VOID_DAMAGE_RESISTANCE = "1546607980";
    ACCURACY = "1591432999";
    DISCIPLINE = "1735777505";
    INVENTORY_SIZE = "1931675084";
    POWER = "1935470627";
    RECOVERY = "1943323491";
    SOLAR_ENERGY_CAPACITY = "2018193158";
  }

  return (
    <div>
      <h3>{item?.Response?.displayProperties?.name}</h3>
      <img
        src={`https://www.bungie.net${item?.Response?.displayProperties?.icon}`}
        alt={item?.Response?.displayProperties?.name}
      ></img>
      <h4>{item?.Response?.flavorText}</h4>
      {/* <div>
        {item?.Response?.investmentStats.map((stat) => {
          if (stat.statTypeHash === StatsEnum() && stat.value > 0) {
            return StatsEnum();
          }
        })}
      </div> */}
    </div>
  );
};

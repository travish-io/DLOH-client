export const GetArmoryItemDetails = (id) => {
  return fetch(
    `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}/`,
    {
      headers: {
        "x-api-key": "85171a1ba12b47c3a02def4c66f45d6f",
      },
    }
  ).then((res) => res.json());
};

export const GetArmoryItems = () => {
  return fetch("https://dloh.herokuapp.com/Armory", {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const ArmorySearch = (param) => {
  return fetch(`https://dloh.herokuapp.com/Armory?param=${param}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const GetArmoryItem = (itemId) => {
  return fetch(`https://dloh.herokuapp.com/Armory/${itemId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json);
};

export const StatsEnum = [
  { name: "HANDICAP", stat: "2341766298" },
  { name: "VOID_COST", stat: "2399985800" },
  { name: "VELOCITY", stat: "2523465841" },
  { name: "RECOIL_DIRECTION", stat: "2715839340" },
  { name: "SCORE_MULTIPLIER", stat: "2733264856" },
  { name: "EFFICIENCY", stat: "2762071195" },
  { name: "SWING_SPEED", stat: "2837207746" },
  { name: "CHARGE_TIME", stat: "2961396640" },
  { name: "MOBILITY", stat: "2996146975" },
  { name: "BOOST", stat: "3017642079" },
  { name: "POWER_BONUS", stat: "3289069874" },
  { name: "SOLAR_COST", stat: "3344745325" },
  { name: "ZOOM", stat: "3555269338" },
  { name: "ANY_ENERGY_TYPE_COST", stat: "3578062600" },
  { name: "PRECISION_DAMAGE", stat: "3597844532" },
  { name: "BLAST_RADIUS", stat: "3614673599" },
  { name: "ARC_ENERGY_CAPACITY", stat: "3625423501" },
  { name: "ARC_COST", stat: "3779394102" },
  { name: "MAGAZINE", stat: "3871231066" },
  { name: "DEFENSE", stat: "3897883278" },
  { name: "MOVE_SPEED", stat: "3907551967" },
  { name: "TIME_TO_AIM_DOWN_SIGHTS", stat: "3988418950" },
  { name: "IMPACT", stat: "4043523819" },
  { name: "RELOAD_SPEED", stat: "4188031367" },
  { name: "STRENGTH", stat: "4244567218" },
  { name: "ROUNDS_PER_MINUTE", stat: "4284893193" },
  { name: "VOID_ENERGY_CAPACITY", stat: "16120457" },
  { name: "INTELLECT", stat: "144602215" },
  { name: "STABILITY", stat: "155624089" },
  { name: "DEFENSE", stat: "209426660" },
  { name: "DURABILITY", stat: "360359141" },
  { name: "RESILIENCE", stat: "392767087" },
  { name: "DRAW_TIME", stat: "447667954" },
  { name: "AMMO_CAPACITY", stat: "925767036" },
  { name: "HANDLING", stat: "943549884" },
  { name: "RANGE", stat: "1240592695" },
  { name: "AIM_ASSISTANCE", stat: "1345609583" },
  { name: "ATTACK", stat: "1480404414" },
  { name: "SPEED", stat: "1501155019" },
  { name: "HEROIC_RESISTANCE", stat: "1546607977" },
  { name: "ARC_DAMAGE_RESISTANCE", stat: "1546607978" },
  { name: "SOLAR_DAMAGE_RESISTANCE", stat: "1546607979" },
  { name: "VOID_DAMAGE_RESISTANCE", stat: "1546607980" },
  { name: "ACCURACY", stat: "1591432999" },
  { name: "DISCIPLINE", stat: "1735777505" },
  { name: "INVENTORY_SIZE", stat: "1931675084" },
  { name: "POWER", stat: "1935470627" },
  { name: "RECOVERY", stat: "1943323491" },
  { name: "SOLAR_ENERGY_CAPACITY", stat: "2018193158" },
];

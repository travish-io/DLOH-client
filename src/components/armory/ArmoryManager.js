/* eslint-disable import/no-anonymous-default-export */
export default {
  async GetArmoryItemDetails(id) {
    const res = await fetch(
      `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}`,
      {
        headers: {
          "x-api-key": "85171a1ba12b47c3a02def4c66f45d6f",
        },
      }
    );
    return await res.json();
  },
};

export const GetArmoryItems = () => {
  return fetch("http://localhost:8000/Armory", {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const ArmorySearch = (param) => {
  return fetch(`http://localhost:8000/Armory?param=${param}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const GetArmoryItem = (itemId) => {
  return fetch(`http://localhost:8000/Armory/${itemId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json);
};

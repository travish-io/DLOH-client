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

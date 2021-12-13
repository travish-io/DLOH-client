export const GetLoadouts = () => {
  return fetch("http://localhost:8000/Loadouts", {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const GetLoadout = (id) => {
  return fetch(`http://localhost:8000/Loadout/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json);
};
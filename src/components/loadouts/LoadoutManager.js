export const GetLoadouts = () => {
  return fetch("https://dloh.herokuapp.com/Loadouts", {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const GetLoadout = (id) => {
  return fetch(`https://dloh.herokuapp.com/Loadouts/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const Create = (list) => {
  let newList = [];

  let name = prompt("Name your Loadout", "");

  if (name === null) return;

  for (var { id: x } of list) {
    newList.push(x);
  }

  const newData = {
    name: name,
    loadoutItemsList: newList,
  };

  const fetchOption = {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };

  return fetch("https://dloh.herokuapp.com/Loadouts", fetchOption).then(
    (Response) => Response.json()
  );
};

export const editLoadout = (loadoutId, list, loudoutName) => {
  let newList = [];

  let name = prompt("Name your Loadout", loudoutName);

  if (name === null) return;

  for (var { id: x } of list) {
    newList.push(x);
  }

  const newData = {
    name: name,
    loadoutItemsList: newList,
  };

  const fetchOption = {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };

  return fetch(`https://dloh.herokuapp.com/Loadouts/${loadoutId}`, fetchOption);
};

export const deleteLoadout = (id) => {
  if (window.confirm("Are you sure you want to delete this Loadout?") === false)
    return;
  fetch(`https://dloh.herokuapp.com/Loadouts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  });
};

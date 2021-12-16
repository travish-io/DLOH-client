export const GetLoadouts = () => {
  return fetch("http://localhost:8000/Loadouts", {
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  }).then((response) => response.json());
};

export const GetLoadout = (id) => {
  return fetch(`http://localhost:8000/Loadouts/${id}`, {
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

  return fetch("http://localhost:8000/Loadouts", fetchOption).then((Response) =>
    Response.json()
  );
};

export const editLoadout = (loadoutId, list) => {
  // refactor create fn
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
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };

  return fetch(`http://localhost:8000/Loadouts/${loadoutId}`, fetchOption);
};

export const deleteLoadout = (id) => {
  if (window.confirm("Are you sure you want to delete this Loadout?") === false)
    return;
  fetch(`http://localhost:8000/Loadouts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("dloh_token")}`,
    },
  });
};

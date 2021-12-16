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
  }).then((response) => response.json);
};

export const Create = (list) => {
  debugger;
  let newList = [];
  let name = prompt("Name your Loadout", "");
  if (name === null) return;
  debugger;
  for (var { id: x } of list) {
    newList.push(x);
  }
  console.log(newList);
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

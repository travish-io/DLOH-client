import React from "react";
import { Route } from "react-router-dom";
import { Armory } from "./armory/Armory";
import { CreateLoadout } from "./loadouts/CreateLoadout";
import { Loadouts } from "./loadouts/Loadouts";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/Armory">
        <Armory />
      </Route>
      <Route exact path="/Loadouts">
        <Loadouts />
      </Route>
      <Route exact path="/Loadouts/Create">
        <CreateLoadout />
      </Route>
      <Route exact path="/Loadouts/Edit/:loadoutId(\d+)">
        <CreateLoadout />
      </Route>
    </>
  );
};

import React from "react";
import { Route } from "react-router-dom";
import { Armory } from "./armory/Armory";
import { ArmoryDetail } from "./armory/ArmoryDetail";
import { Loadouts } from "./loadouts/Loadouts";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Armory />
      </Route>
      <Route path="/:itemHash(\d+)">
        <ArmoryDetail />
      </Route>
      <Route path="/Loadouts">
        <Loadouts />
      </Route>
    </>
  );
};

import React from "react";
import { Route } from "react-router-dom";
import { Armory } from "./armory/Armory";
import { ArmoryDetail } from "./armory/ArmoryDetail";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Armory />
      </Route>
      <Route path="/:itemHash(\d+)">
        <ArmoryDetail />
      </Route>
    </>
  );
};

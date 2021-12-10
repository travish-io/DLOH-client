import React from "react";
import { Route } from "react-router-dom";
import { Armory } from "./armory/Armory";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/">
        <Armory />
      </Route>
    </>
  );
};

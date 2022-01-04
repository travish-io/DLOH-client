import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { TailwindNav } from "./nav/TailwindNav";
import "./DLOH.css";

export const DLOH = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("dloh_token")) {
          return (
            <>
              <Route>
                <TailwindNav />
                <ApplicationViews />
              </Route>
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>
  </>
);

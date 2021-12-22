import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./DLOH.css";

export const DLOH = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("dloh_token")) {
          return (
            <>
              <Route>
                <NavBar />
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

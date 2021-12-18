// TO DO:
// EITHER MAKE THIS OATH SHIT WORK OR SCRAP THIS MOD.


import React, { useRef } from "react";
import crypto from "crypto";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";
import { Module } from "module"

export const Login = () => {
  const username = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const history = useHistory();
  let state = crypto.randomBytes(28).toString("hex");
  const APIKey = "85171a1ba12b47c3a02def4c66f45d6f";
  const redirectUri = `https://dloh.herokuapp.com/?api_key=${APIKey}`;
  const clientId = 38507;
  const authEndpoint = `https://www.bungie.net/en/oauth/authorize?client_id=${clientId}&response_type=code&state=${state}`;

  console.log(state);

  const handleOauth = (e) => {
    e.preventDefault();

    return fetch(authEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-APi-Key": APIKey,
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
        response: 
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("dloh_token", res.token);
          history.push("/");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };

  return;
};

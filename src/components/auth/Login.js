import React, { useRef } from "react";
import crypto from "crypto";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  const username = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const history = useHistory();
  let state = crypto.randomBytes(28).toString("hex");
  const APIKey = "85171a1ba12b47c3a02def4c66f45d6f";
  const redirectUri = `https://dloh.herokuapp.com/?api_key=${APIKey}`;
  const clientId = 38507;

  console.log(state);

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch("https://dloh.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("dloh_token", res.token);
          history.push("/Armory");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };
  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current.close(e)}
        >
          Close
        </button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>DLOH</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputUsername"> Username address </label>
            <input
              ref={username}
              type="username"
              id="username"
              className="form-control"
              placeholder="Username address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset
            style={{
              textAlign: "center",
            }}
          >
            <button className="btn btn-1 btn-sep icon-send" type="submit">
              Sign In
            </button>
          </fieldset>
        </form>
      </section>
      {/* <a
        href={`https://www.bungie.net/en/oauth/authorize?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=https://127.0.0.1:8000/`}
      >
        Test oauth{" "}
      </a> */}
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};

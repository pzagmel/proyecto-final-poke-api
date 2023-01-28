import React from "react";
import "../../styles/login.css";

import { Link, NavLink, useNavigate, useContext } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h2>
              <img src={loginImage} style={{ width: 300 }} />
            </h2>

            <form
              className="login-register"
              onSubmit={(evento) => {
                console.log("evento", evento);
                evento.preventDefault();
                let MAIL = evento.target[0].value;
                let PASS = evento.target[1].value;

                if (MAIL == "" || PASS == "") {
                  alert("Debes completar los datos");
                } else {
                  actions.login(MAIL, PASS);
                }
              }}
            >
              <input
                type="text"
                className="fadeIn second"
                name="email"
                placeholder="login"
              />
              <input
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
              />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <Link to="/recover" className="link link-style">
              ¿Olvidaste tu contraseña?
            </Link>

            <div className="links-div">
              <Link to="/register" className="link link-style">
                ¿No tienes cuenta? Registrate
              </Link>
            </div>
          </div>
          <h5></h5>
        </div>
      </div>
    </div>
  );
};

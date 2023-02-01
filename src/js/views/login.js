import React, { useContext, useState } from "react";
import "../../styles/login.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import login from "../../img/login.png";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = () => {

fetch ("https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us84.gitpod.io/login")

  }


  return (
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h1 className="titulologin">
              Login
            </h1>

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
                placeholder="email" value= {email} onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="password" value= {password} onChange={(e)=>setPassword(e.target.value)}
              />
              <input type="submit" onClick={handleClick} className="fadeIn fourth" value="Log In" />
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

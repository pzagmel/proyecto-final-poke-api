import React from "react";
import "../../styles/login.css";
import loginImage from "../../img/login.png";
import pokebola from "../../img/POKEBOLA.png";
import { Link } from "react-router-dom";

import { InfoGym } from "../component/CardsINFOGYM";
import { Formik, Form, Field } from "formik";

export const Login = () => (
  <>
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h2>
              <img src={loginImage} style={{ width: 300 }} />
            </h2>
            <form className="login-form">
              <input type="text" placeholder="Nombre de Usuario" required />
              <input type="password" placeholder="Contraseña" required />
              <Link to="/recover" className="link link-style">
                  ¿Olvidaste tu contraseña?
                </Link>
              <button>Ingresar</button>
              <div className="links-div">
                <Link to="/register" className="link link-style">
                  ¿No tienes cuenta? Registrate
                </Link>
              </div>
            </form>
          </div>
          <h5>
            <img className="poke-img" src={pokebola} style={{ width: 75 }} />
          </h5>
        </div>
      </div>
    </div>
  </>
);

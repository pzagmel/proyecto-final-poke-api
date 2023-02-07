import React, { useContext, useState, useEffect } from "react";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  const login = async (evento) => {
    evento.preventDefault();
    let MAIL = evento.target[0].value;
    let PASS = evento.target[1].value;
    let rememberMe = evento.target[2].checked;

    if (MAIL == "" || PASS == "") {
      alert("Debes completar los datos");
    } else {
      const success = await actions.login(MAIL, PASS, rememberMe);
      if (!success) {
        setErrorMessage(true);
      }
    }
  };

  const llamada = async () => {

    if (sessionStorage.getItem("token") || localStorage.getItem("token")) {
    
      const ruta = await actions.tokenValidation("/login");
      console.log("ruta", ruta);
      if (typeof ruta === "string") {
        navigate(ruta);
      }
    }
  };

  useEffect(() => {
    llamada();
  }, []);

  useEffect(() => {
    const {
      userInfo: { rol },
    } = store;
    console.log("rol", rol);
    if (rol !== null) {
      if (rol) {
        navigate("/perfilprofe");
      } else {
        navigate("/perfilcliente");
      }
    }
  }, [store.userInfo.rol]);
  return (
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h1 className="titulologin"> LOGIN </h1>
            <form className="login-register" onSubmit={login}>
              <input
                type="text"
                className="fadeIn second"
                name="email"
                placeholder="email"
              />
              <input
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
              />
               {/* <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                /> 
                 {<label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate "
                >
                  Remember me
                </label>  
              </div> */}
              <input type="submit" className="fadeIn fourth" value="Log In" /> 
            </form>
            {errorMessage && <div className="error-message">Usuario o contraseña incorrectos</div>}
            <Link to="/recover" className="link link-style">
              {" "}
              ¿Olvidaste tu contraseña ?
            </Link>
            <div className="links-div">
              <Link to="/register" className="link link-style">
                {" "}
                ¿No tienes cuenta ? Registrate{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <h5> </h5>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

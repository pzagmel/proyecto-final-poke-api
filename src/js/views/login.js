import React, { useState, useEffect } from "react";
import "../../styles/login.css";
import loginImage from "../../img/login.png";
import pokebola from "../../img/POKEBOLA.png";
import { Link } from "react-router-dom";



export const Login = ({email,password}) => {

  /* login profesor */
const [login, setLogin] = useState([]);
  

function Actualizar() {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
method: 'GET',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("https://3000-lukasoy-backendpokegym-h2fgbcggp3w.ws-us83.gitpod.io/profesor", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
  }

   useEffect(() => {
    fetch("https://3000-lukasoy-backendpokegym-h2fgbcggp3w.ws-us83.gitpod.io/profesor")
      .then((data) => data.json())
      .then((response) => setLogin(response));
  }, []);
useEffect(()=>{
  Actualizar();
}, [login]);

/* final login profesor */


  return(
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h2>
              <img src={loginImage} style={{ width: 300 }} />
            </h2>
            <form className="login-form">
            {login.map((item) => (
              <React.Fragment key={item.email}>
               <input
                  type="email"
                  placeholder={`email: ${item.email}`}
                  required
                /> <input
                type="password"
                placeholder={`Contraseña: ${item.password}`}
                required
              />
              </React.Fragment>
            ))}
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
  )
  };

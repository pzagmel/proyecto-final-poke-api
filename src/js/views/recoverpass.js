import React from "react";
import "../../styles/recuperar.css";
import pokebola from "../../img/POKEBOLA.png";
import loginImage from "../../img/login.png";

export const RecoverPass = () => (
  <>
    <div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h2 id="titulorecover">
              RECUPERA TU CONTRASEÑA
            </h2>
            <form className="login-form">
              <input type="text" placeholder="Correo Electrónico" required />
              <input type="password" placeholder="Rut" required />             
              <button id="okrecover">OK</button>
              <div className="links-div">               
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

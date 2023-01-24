import React from "react";
import "../../styles/recuperar.css";
import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";


export const RecoverPass = () => (
  <div className="container">
    <div className="row justify-content-center">
      
        <div>
          <img src={LOGOPOKEGYM}  />
        </div>
        <div className="recover-card">
          <h3>Introduce Información</h3>
          <form className="recover-form">
            <input type="mail" placeholder="Correo" />
            <input type="Rut" placeholder="Rut" />
            <button>OK</button>
          </form>
        </div>
      
    </div>
  </div>
);

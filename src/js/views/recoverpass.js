import React from "react";
import "../../styles/recuperar.css";

export const RecoverPass = () => (
  <div className="container">
    <div className="row">
      <div className="col-1">
        <div>
          <img src={LOGOPOKEGYM} style={{ width: 250 }} />
        </div>
        <div className="recover-card">
          <h2>
            <img src={registro} style={{ width: 300 }} />
          </h2>
          <h3>Introduce Información</h3>
          <form className="recover-form">
            <input type="mail" placeholder="Correo" />
            <input type="Rut" placeholder="Rut" />
            <button>OK</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

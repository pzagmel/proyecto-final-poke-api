import React from "react";
import "../../styles/recuperar.css";
import pokebola from "../../img/POKEBOLA.png";



export const RecoverPass = () => (
  <div className="container recover justify-content-center">    
        <div className="recover-card">
          <h3 id="recuperartitulo">Recupera Tu Contraseña</h3>
          <form className="recover-form">
            <div className="row mail">
            <input type="mail" placeholder="Correo" />
            </div>
            <div className="row rut">
            <input type="Rut" placeholder="Rut" />
            </div>
            <div className="row ok">
            <button>OK</button>
            </div>
          </form>
          <div> <img id="recoverpoke" src={pokebola} /></div>
        </div>  
  </div>
);

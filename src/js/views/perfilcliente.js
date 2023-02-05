import React from "react";
import "../../styles/perfilcliente.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Bienvenido from "../../img/Bienvenidos.png";
import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { InfoFicha } from "../component/infoFichaCliente";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Fichaevaluacion } from "../component/fichaevaluacion";

export const Perfilcliente = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  /* useEffect(() => {
actions.tokenValidation("/perfilcliente")
}, []) */

  return (
    <div className="container">
      {store.token ? (
        <div>
          <div className="container" id="bienvenido">
            <img src={Bienvenido} style={{ width: 1300 }} />
            <h1 className="usuario"> {store.userInfo?.nombre} </h1>
          </div>
          <div>
            <InfoFicha />
            <Fichaevaluacion />
          </div>
        </div>
      ) : (
        (window.location.href = "*")
      )}
    </div>
  );
};
/* En este ejemplo, si store.token existe, entonces se renderizará el contenido de la vista, de lo contrario, se mostrará null y no se verá nada en la pantalla. */

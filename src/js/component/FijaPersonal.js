import React from "react";
import pokebola from "../../img/POKEBOLA.png";
import lucario from "../../img/lucario.jpg"
import { Context } from "../store/appContext";
import "../../styles/Fichapersonal.css";
import { useEffect, useState, useContext } from "react";

export const FichaPersonal = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="conteiner CajaPadre" >
      <div className="fichaentera">
      <h1 className="tituloperfilprofe"> Información del Profesional </h1>
      <div className="row CajaHijoFicha" >
      <ul className="col-6 lista1" >
      <img src={lucario} className="lucario" alt="..."/>
      </ul>
                  <ul className="col-6 lista2" >
                    <li> Nombre: {store.userInfo?.nombre} </li>
                    <li> email: {store.userInfo?.email} </li>
                    <li> Cargo: Profesor </li>
                    <li> Fono:{store.userInfo?.telefono}  </li>
                    <li> Horario:Diurno </li>
                  </ul>
           </div>
           </div>
    </div>
  );
};

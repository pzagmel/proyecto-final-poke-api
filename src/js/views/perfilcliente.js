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
import { FichaPersonal } from "../component/FijaPersonal";


export const Perfilcliente = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
 
  const llamada = async () => {
    if (sessionStorage.getItem("token")?? localStorage.getItem("token")) {
      const ruta = await actions.tokenValidation("/perfilcliente");
      console.log("ruta", ruta);
      if (ruta !== "/perfilcliente") {
        navigate(ruta);
      }      
    }
    else
    navigate("/login")
  };
 


  useEffect(() => {
    llamada();
  }, []);




  return (
    <div className="container">
        <div>
          <div className="container" id="bienvenido">
            <img src={Bienvenido} style={{ width: 1300 }} />
            <h1 className="usuario"> {store.userInfo?.nombre} </h1>
          </div>
          <div>
            <InfoFicha />
            {store.userInfo.id!=''&&<Fichaevaluacion/>}
          </div>
        </div>
    </div>
  );
};

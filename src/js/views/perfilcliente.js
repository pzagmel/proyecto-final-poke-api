import React from "react";
import "../../styles/perfilcliente.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Bienvenido from "../../img/Bienvenidos.png";
import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import {InfoFicha} from "../component/infoFichaCliente";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Fichaevaluacion } from "../component/fichaevaluacion";



export const Perfilcliente = () => {
        const { store, actions } = useContext(Context);
        useEffect(() => {
       actions.tokenValidation("/perfilcliente")
        }, [])
        
 return(    
      <div className="container">
      
        <div className="container" id="bienvenido">
                <img src={Bienvenido} style={{width:1300}}/>
                <h1 className="usuario"> {store.userInfo?.nombre} </h1>
        </div>
        <div>
             <InfoFicha />
             <Fichaevaluacion/>
        
        </div>
        </div>
)};

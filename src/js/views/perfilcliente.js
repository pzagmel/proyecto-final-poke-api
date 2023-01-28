import React from "react";
import "../../styles/perfilcliente.css";
import Bienvenido from "../../img/Bienvenidos.png";
import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import {InfoFicha} from "../component/infoFichaCliente";

export const Perfilcliente = () => (
      <div className="container">
      
        <div className="container" id="bienvenido">
                <img src={Bienvenido} style={{width:1300}}/>
        </div>
         <div>    
                <InfoFicha />
        
        </div>
        </div>
);

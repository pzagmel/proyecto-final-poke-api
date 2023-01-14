import React from "react";
import pokebola from "../../img/POKEBOLA.png"
import "../../styles/Fichapersonal.css";

export const FichaPersonal = () => (
    <div>
        <div >
            <div className="Ficha">
            <h1>Información del Profesional</h1>
            <ul className="ListaCompleta">
                <li> Nombre </li>
                <li> Apellido </li>
                <li> Información Profesional </li>
                <li> Información Profesional </li>
                <li> Información Profesional </li>
                </ul>
                <img src={pokebola}/>
            </div>
        </div>
        <img src={pokebola}/>
    </div>
        

)
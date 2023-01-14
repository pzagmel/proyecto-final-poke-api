import React from "react";
import pokebola from "../../img/POKEBOLA.png"
import "../../styles/Fichapersonal.css";

export const FichaPersonal = () => {
    const profesionales = [
           { nombre: 'ASH', apellido: 'KEPSHUP', info: 'ENTRENADOR POKEMON' }]
        
        return (
    <div>
        <div >
            <div className="Ficha">
            <h1>Información del Profesional</h1>
            <ul className="ListaCompleta">
            {profesionales.map(profesional => (
                <li> {profesional.nombre} {profesional.apellido} </li>
                
                ))} 
                </ul>
                <img src={pokebola}/>
            </div>
        </div>
        <img src={pokebola}/>
    </div>
);
    }


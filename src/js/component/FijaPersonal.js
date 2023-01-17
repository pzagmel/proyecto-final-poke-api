import React from "react";
import pokebola from "../../img/POKEBOLA.png"
import "../../styles/Fichapersonal.css";

export const FichaPersonal = () => {
    const profesionales = [
           { nombre: 'ASH', apellido: 'KEPSHUP', info: 'ENTRENADOR POKEMON', horario:'DIURNO' }]
        
        return (
    <div className="conteiner">
        <div className="row-6">
            <div className="col">
                <div className="CuadroFicha">
            <div className="Ficha">
            <h1>Información del Profesional</h1>
            <ul className="ListaCompleta">
            {profesionales.map(profesional => (
                <li> 
                    {profesional.nombre} 
                    {profesional.apellido} 
                    {profesional.info} 
                    {profesional.horario}
                    </li>
                ))} 
                </ul>
                </div>  
            </div>
            </div>
        </div>
       
    </div>
);
    }


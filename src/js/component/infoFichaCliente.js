import React from "react";
import pokebola from "../../img/POKEBOLA.png";
import logoPerfil from "../../img/perfil-logo.png";
import "../../styles/Fichapersonal.css";


export const InfoFicha = () => (
    <div>
        <div >
            <div className="container infomasficha">
                <div className="info-personal">
                    <h2 className="h2-text">Información Personal</h2>
                    <ul className="ListaDatos">
                        <li> Nombre Completo: </li>
                        <li> Fecha de Ingreso: </li>
                        <li> Clases: </li>
                    </ul>
                 </div>
                 <div className="container-logo-ficha">
                    <div className="logo-perfil">
                        <img src={logoPerfil}/>
                    </div> 
                    <div className="ficha-evaluacion">
                         <h2 className="h2-text">Ficha de Evaluación</h2>
                            <ul className="ListaDatosFicha">
                                <li> Indices: </li>
                                <li> Medidas: </li>
                                <li> Índice Masa Corporal: </li>
                                <li> Índice Grasa Corporal: </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

)
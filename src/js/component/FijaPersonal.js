import React from "react";
import pokebola from "../../img/POKEBOLA.png";
import "../../styles/Fichapersonal.css";

export const FichaPersonal = () => {
  const profesionales = [
    {
      nombre: "ASH",
      apellido: "KEPSHUP",
      info: "ENTRENADOR POKEMON",
      horario: "DIURNO",
    },
    /*    { nombre: 'Misty', apellido: 'Mistison', info: 'ENTRENADORA POKEMON', horario:'NOCTURNO' } */
  ];

  return (
    <div className="conteiner" id="CajaPadre">
      <h1> Información del Profesional </h1>{" "}
      <div className="row-6" id="CajaHijoFicha">
        <div className="col">
          <div className="CuadroFicha">
            <div className="Ficha">
              {profesionales.map((profesional ,i) => {
                return (
                  <ul id="ListaTOTAL" key={"elm"+i}>
                    <li> Nombre: {profesional.nombre} </li>{" "}
                    <li> Apellido: {profesional.apellido} </li>{" "}
                    <li> Cargo: {profesional.info} </li>{" "}
                    <li> Horario: {profesional.horario} </li>{" "}
                  </ul>
                );
              })}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

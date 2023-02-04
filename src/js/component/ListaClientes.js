import React from "react";
import { useEffect, useState, useContext } from "react";
import pokebola from "../../img/POKEBOLA.png";
import "../../styles/PPClientes.css";
import { Context } from "../store/appContext";

// window.onload = function () {
//   const boton = document.querySelector(".dropdown-toggle");
//   const contenedor = document.querySelector(".PrincipalContainerDropdown");

//   boton.addEventListener("click", () => {
//     contenedor.classList.toggle("aumentado");
//   });
// };

export const ListaClientes = ({ data }) => {
  const { store, actions } = useContext(Context);
  const [list, setList] = useState([]);

  return (
    <div className="col-12" id="PrimeroPrimerin">
      <div className="row">
        <div className="PrincipalContainerDropdown">
          <div className="ContainerDropdownClientes">
            <div className="dropdowndos">
              
              <select key={data.nombre} className="form-select" aria-label="Default select example">              
            {data.map((user) => {
              return ( 
               <option value={user.id}> {user.nombre + " " + user.apellido} </option>             
               );
              })}            
              </select>                                     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

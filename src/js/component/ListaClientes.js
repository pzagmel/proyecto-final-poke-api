import React from "react";
import { useEffect, useState, useContext } from "react";
import pokebola from "../../img/POKEBOLA.png";
import "../../styles/PPClientes.css";
import { Context } from "../store/appContext";
import { Modal } from 'react-bootstrap';
import { Fichaevaluacion } from "./fichaevaluacion";

// window.onload = function () {
//   const boton = document.querySelector(".dropdown-toggle");
//   const contenedor = document.querySelector(".PrincipalContainerDropdown");

//   boton.addEventListener("click", () => {
//     contenedor.classList.toggle("aumentado");
//   });
// };

export const ListaClientes = ({ data }) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState(null);
  const [showFichaevaluacion, setShowFichaevaluacion] = useState(false);

  function modalinfo (user){
   setUser(user);
   setShowFichaevaluacion(true)
  }

  function modalclose (){
    setUser(null);
    setShowFichaevaluacion(false)
   }

  return (
    data ? (
    <div className="col-12" id="PrimeroPrimerin">
      <div className="row">
        <div className="PrincipalContainerDropdown">
          <div className="ContainerDropdownClientes">
            <div className="dropdowndos">
              
              <select className="form-select" aria-label="Default select example">              
            {data.map((user) => {
              return ( 
               <option key={user.nombre} value={user.id} onClick={() => modalinfo(user)} >{user.nombre} </option>             
               );
              })} 
               
                         
              </select>
              {/*  <Modal className="modalficha" show={true} onHide={() => modalclose()}>
        <Modal.Header closeButton >
          <Modal.Title>Fichaevaluacion</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <Fichaevaluacion />  
         </Modal.Body>
      </Modal>     */}                                 
            </div>
          </div>
        </div>
       
      </div>
    </div>) : null
  );
};

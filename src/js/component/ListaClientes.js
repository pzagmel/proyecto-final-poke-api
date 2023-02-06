import React from "react";
import { useEffect, useState, useContext } from "react";
import pokebola from "../../img/POKEBOLA.png";
import "../../styles/PPClientes.css";
import { Context } from "../store/appContext";
import { Modal } from 'react-bootstrap';
import { Fichaevaluacion } from "./fichaevaluacion";
import pokebolalista from "../../img/pokebolalista.png"


export const ListaClientes = ({ data }) => {
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleClick = (user) => {
      setSelectedUser(user);
    };
  
    return (
      <div>
<div className="dropdown-center">
  <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <p className="tucliente">Tus clientes POKEGYM</p> 
  </button>
  <ul className="dropdown-menu user">
   <div className="listacliente">
          {data.map((user) => {
            return ( 
              <div key={user.nombre} onClick={() => handleClick(user)}> <img src={pokebolalista}/> {user.nombre}</div>             
            );
          })}
        </div> 
  </ul>
</div>  
        {selectedUser && (
          <Fichaevaluacion user={selectedUser} /* editar peso,porcentaje de grasa,porcentaje de musculo */ />
        )}
      </div>
    );
  };
  
  export default ListaClientes

import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


export const RegistroFicha = () => {
    const { store, actions } = useContext(Context);

        const handleform = (evento) => {
            console.log("evento", evento);
            evento.preventDefault();
            let peso = evento.target[0].value;
            let porcentaje_grasa = evento.target[1].value;
            let porcentaje_musculo = evento.target[2].value;
            let nivel = evento.target[3].value;
        
            if (peso == "" || porcentaje_grasa == "" || porcentaje_musculo =="" || nivel =="") {
              alert("Debes completar los datos");
            } else {
              actions.handleform(peso, porcentaje_grasa, porcentaje_musculo, nivel );
            }
          };
        
    return (
        <div classNAme="container text-center mb-5">
        <div classNAme="row">
          <div class="col-3">         
          </div>
          <div classNAme="col-6">
            <div>Crear ficha </div>
          <form  onSubmit={handleform} className="login-form">
              <input type="text" placeholder="Peso" required />
              <input type="text" placeholder="% de Grasa" required />
              <input type="text" placeholder="% de Musculo" required />  
              <input type="text" placeholder="Nivel" required />      
              <button id="okregisterficha">Guardar</button>             
            </form>
          </div>
          <div classNAme="col-3">          
          </div>
        </div>
      </div>
       
     );
};

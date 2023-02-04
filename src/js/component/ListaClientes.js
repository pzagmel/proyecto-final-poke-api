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
  
  // useEffect(() => {
  
  //   var myHeaders = new Headers();
  // myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
  // myHeaders.append("Content-Type", "application/json");
  
  // var raw = JSON.stringify({});
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };
  
  // fetch("https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us85.gitpod.io/ficha/", requestOptions)
  // .then((data) => data.json())
  // .then((response) => {
    
  //   setList(response.user);
  // })
  // .catch((error) => console.log("error", error));
  
  // }, []);

  return (
    <div className="col-12" id="PrimeroPrimerin">
      <div className="row">
        <div className="PrincipalContainerDropdown">
          <div className="ContainerDropdownClientes">
            <div className="dropdowndos">
              
              <select onClick={(e)=> console.log(e.target.value)} key={data.nombre} className="form-select" aria-label="Default select example">              
            {data.map((user) => {
              return ( 
               <option value={user.id} >{user.nombre + " " + user.apellido} </option>             
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

import React from "react";
import pokebola from "../../img/POKEBOLA.png"
import "../../styles/PPClientes.css";

window.onload = function(){
  const boton = document.querySelector('.dropdown-toggle');
  const contenedor = document.querySelector('.PrincipalContainerDropdown');
 
  boton.addEventListener('click', () => {
    contenedor.classList.toggle('aumentado');
  });
}
export const ListaClientes = () => (
<div className="col-12">
  <div className="row">
    <div className="PrincipalContainerDropdown">
    <div ClassName="ContainerDropdownClientes">
<div className="dropdowndos">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Tus Clientes
  </button>
  
  <ul id="DropDownPrincipal"className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button id="ListaDropdown" className="dropdown-item" type="button">Aqui estaría el nombre y apellido</button></li>
    </ul>
</div>
    </div>
    </div>
    </div>
    </div>
)


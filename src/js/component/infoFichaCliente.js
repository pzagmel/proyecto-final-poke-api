import React,{useContext} from "react";

import "../../styles/Fichapersonal.css";
import { Context } from "../store/appContext";



export const InfoFicha = () => {
const {store, actions} = useContext(Context)

   
  return( 
    
   <div>
        <div >
            <div className="container infomasficha">
                <div className="info-personal">
                    <h2 className="h2-text">Información Personal</h2>
                
                    <ul className="ListaDatos">
                        <li className="infocliente"> Nombre: {store.userInfo?.nombre} </li>
                        <li className="infocliente"> Rut: {store.userInfo?.rut} </li>
                        <li className="infocliente"> Correo: {store.userInfo?.email}</li>
                        <li className="infocliente"> Telefono: {store.userInfo?.telefono}</li>
                    </ul>
                 </div>
            </div>
        </div>    
    </div>
      
   
)}
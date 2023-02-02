import React from "react";
import Perfil from "../../img/perfillisto.png"
import { Context } from "../store/appContext";
import { useState, useEffect, useContext } from "react";

export const Profile = () =>{
    const { store, actions } = useContext(Context);
    return (
        <>
         <img className="img-icon4" src={Perfil} alt="Icono usuario" /> 
        </>
    )
}
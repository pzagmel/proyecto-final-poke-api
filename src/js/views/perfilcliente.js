import React from "react";
import "../../styles/perfilcliente.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import {InfoFicha} from "../component/infoFichaCliente";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Perfilcliente = () => {
const { store, actions } = useContext(Context);

return(
        <div>
             <InfoFicha />
        
        
        </div>
)};

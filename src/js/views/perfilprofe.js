import React from "react";
import "../../styles/perfilprofe.css";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { FichaPersonal } from "../component/FijaPersonal";
import { ListaClientes } from "../component/PerfilProfesionalListaClientes";
import { Fichaevaluacion } from "../component/fichaevaluacion";


export const Perfilprofe = () => (
        <div>
             <h1> PerfilProfe</h1>

        <FichaPersonal/>
        <ListaClientes/>
        
        <div className="row rowfichaej">          
        <Fichaevaluacion/>
        </div>
                
 </div>
);

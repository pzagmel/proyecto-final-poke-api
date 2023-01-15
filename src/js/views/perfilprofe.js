import React from "react";
import "../../styles/perfilprofe.css";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { FichaPersonal } from "../component/FijaPersonal";
import { ListaClientes } from "../component/PerfilProfesionalListaClientes";
import { Fichaevaluacionpro } from "../component/fichaevaluacionpro";
import { Fichaejercicios } from "../component/fichaevaluacionpro";

export const Perfilprofe = () => (
        <div>
             <h1> PerfilProfe</h1>

        <FichaPersonal/>
        <ListaClientes/>
        <div className="row">
           <div className="col">
             <Fichaejercicios/>
            </div>
            <div className="col">
        <Fichaevaluacionpro/>
            </div>
        </div>        
 </div>
);

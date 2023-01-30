import React from "react";
import { useEffect, useState } from "react";
import "../../styles/perfilprofe.css";
import Bienvenido from "../../img/Bienvenidos.png";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { FichaPersonal } from "../component/FijaPersonal";
import { ListaClientes } from "../component/PerfilProfesionalListaClientes";
import { Fichaevaluacion } from "../component/fichaevaluacion";

export const Perfilprofe = () => {
  
  const [list, setList] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us84.gitpod.io/ficha",
      requestOptions
    )
      .then((data) => data.json())
      .then((response) => {
        console.l;
        setList(response);
      });
  }, []);

  return (
    <div>
       <div className="container" id="bienvenido">
                <img src={Bienvenido} style={{width:1300}}/>
        </div>
      <h1> PerfilProfe</h1>
      <FichaPersonal />
      <ListaClientes />
      <div className="row rowfichaej">
        {list.map((elm, i) => {
          return (
            <Fichaevaluacion
              key={"elm" + i}
              peso={elm.peso}
              estatura={elm.estatura}
              porcentaje_grasa={elm.porcentaje_grasa}
              porcentaje_musculo={elm.porcentaje_musculo}
              nivel={elm.nivel}
            />
          );
        })}
      </div>
    </div>
  );
};

import React from "react";
import { useEffect, useState, useContext } from "react";
import "../../styles/perfilprofe.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Bienvenido from "../../img/Bienvenidos.png";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { FichaPersonal } from "../component/FijaPersonal";
import { ListaClientes } from "../component/ListaClientes";
import { Fichaevaluacion } from "../component/fichaevaluacion";


export const Perfilprofe = () => {
  
  const { store, actions } = useContext(Context);
  const [list, setList] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      rol: false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://3000-lukasoy-backendpokegym-dy4657cuuns.ws-us85.gitpod.io/user",
      requestOptions
    )
      .then((data) => data.json())
      .then((response) => {
        console.log("response", response);
        setList(response.user);
      })
      .catch((error) => console.log("error", error));
  }, []);


return (
  store.token ? (
    <div>
       <div className="container" id="bienvenido">
                <img src={Bienvenido} style={{width:1300}}/>
        </div>
      <h1> PerfilProfe</h1>
      <FichaPersonal />
     
     
          <ListaClientes
          data= {list}
          />
      
    </div>
  ) : (
    window.location.href = "*"
  )
);
}


 

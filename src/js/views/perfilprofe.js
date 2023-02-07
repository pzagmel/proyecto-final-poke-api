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
  let navigate = useNavigate();
  

  const llamada = async () => {
    if (sessionStorage.getItem("token")?? localStorage.getItem("token")) {
      const ruta = await actions.tokenValidation("/perfilprofe");
      console.log("ruta", ruta);
      if (ruta !== "/perfilprofe") {
        navigate(ruta);
      }      
    }else 
    navigate("/login")
  };

  useEffect(() => {
    llamada();
  }, []);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem("token")?? localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        rol: false,
      }),
      redirect: "follow",
    };
    fetch(
      "https://3000-lukasoy-backendpokegym-h7ytze1t944.ws-us85.gitpod.io/user",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        if(data.user)
        setList(data.user);
      })
      .catch((error) =>{ 
        setList([]);
        console.log("error", error)});
  }, []);

  return(
    <div>
      <div className="container" id="bienvenido">
        <img src={Bienvenido} style={{ width: 1300 }} />
      </div>
      <h1 className="nombreprofe"> {store.userInfo?.nombre}</h1>
      <FichaPersonal />
      <ListaClientes data={list} />
    </div>
  )
};

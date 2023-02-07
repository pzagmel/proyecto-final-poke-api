import React from "react";
import "../../styles/perfilcliente.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Bienvenido from "../../img/Bienvenidos.png";
import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { InfoFicha } from "../component/infoFichaCliente";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Fichaevaluacion } from "../component/fichaevaluacion";
import { FichaPersonal } from "../component/FijaPersonal";

export const Perfilcliente = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  
  const [imageUrl, setImageUrl] = useState("");

  const llamada = async () => {
    if (sessionStorage.getItem("token")?? localStorage.getItem("token")) {
      const ruta = await actions.tokenValidation("/perfilcliente");
      console.log("ruta", ruta);
      if (ruta !== "/perfilcliente") {
        navigate(ruta);
      }      
    }
    else 
    navigate("/login")
  };
  
  useEffect(() => {
    llamada();
    const pokemonId = 66;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.sprites.front_default);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="container">
        <div>
          <div className="container" id="bienvenido">
            <img src={Bienvenido} style={{ width: 1300 }} />
            <h1 className="usuario"> {store.userInfo?.nombre} </h1>
            <div>
              <h1>Tu Pokemon</h1>
            <img src={imageUrl} style={{ width: "300px", height: "300px" }} />
            </div>
          
          </div>
          <div>
            <InfoFicha />
            {store.userInfo.id!=''&&<Fichaevaluacion/>}
          </div>
        </div>
    </div>
  );
};


/* En este ejemplo, si store.token existe, entonces se renderizará el contenido de la vista, de lo contrario, se mostrará null y no se verá nada en la pantalla. */

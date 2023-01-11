import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import tituloinfo from "../../img/TITULOINFO.png";
import profesTitulo from "../../img/PROFESTITULO.png";
import unete from "../../img/UNETETITULO.png";
import pokebola from "../../img/pngegg 1.png";
import "../../styles/home.css";
import { Card } from "../component/card.js";

export const Home = () => (
  <div className="container d-flex justify-content-center">
    <div className="row">
      <div className="col 4 text-center" />
      <Card img={tituloinfo} description={"Informacion de qué trata la app"} />{" "}
      <div className="col 4 text-center" />
      <Card
        img={profesTitulo}
        description={"Conoce a nuestros profesionales"}
      />
      <div className="col 4 text-center" />
      <Card img={unete} img2={pokebola} />
    </div>
  </div>
);

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import tituloinfo from "../../img/TITULOINFO.png";
import profesTitulo from "../../img/PROFESTITULO.png";
import unete from "../../img/UNETETITULO.png";
import pokebola from "../../img/pngegg 1.png";


import "../../styles/home.css";
import { Card } from "../component/card.js";
import { Longcard } from "../component/card.js";

export const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row row-cols-4 g-3">
          <div className="col-sm" />
          <Card
            img={tituloinfo}
            description={"Informacion de qué trata la app"}
          />
          <div className="col-sm" />
          <Card
            img={profesTitulo}
            description={"Conoce a nuestros profesionales"}
          />
          <div className="col-sm" />
          <Card img={unete} img2={pokebola} />
         
        
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <Longcard
              title={"Reto de la Semana"}
              img={
                "https://lmimirror3pvr.azureedge.net/static/media/18461/22b355e1-db06-4491-b67c-f00048f78b99/training-load-960x540.jpg"
              }
              description= {"-100 Burpies"}  
              description2={"-50 Sentadillas Bulgaras"}
              description3={"-Plancha de 1 minuto"}          
            />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col" />
          <Card
            
            description={"Profesional 1"}
          />
          <div className="col" />
          <Card
            description={"Profesional 2"}
          />
          <div className="col" />
          <Card img={unete} description={"Profesional 3"} />
        </div>
      </div>
    </>
  );
};

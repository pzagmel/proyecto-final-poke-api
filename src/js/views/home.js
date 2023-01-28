import React from "react";
import pokebola from "../../img/pngegg 1.png";
import personaltrainer1 from "../../img/personaltrainer1.gif";
import kine from "../../img/kine.gif";
import personaltrainer2 from "../../img/personaltrainer2.gif";
import reto from "../../img/Tu Desafio.png";

import "../../styles/home.css";
import { Card } from "../component/card.js";
import { Longcard } from "../component/card.js";
import { Procard } from "../component/card.js";
import { CartHome } from "../component/cardhome";
import { Calendario } from "../component/calendario";
import { Comments }  from "../component/carousel";
import { InfoGym } from "../component/CardsINFOGYM";




export const Home = () => {
  return (
    <>
    <CartHome/>
     <div className="container">
      <div className="justify-content-center">
        <div className="row g-3 mb-2">
          <div className="col-sm-4 ">
            <Card
              title={"Info!"}
              description={"Informacion de qué trata la app"}
              img2={pokebola}
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              title={"Profes"}
              description={"Conoce a nuestros profesionales"}
              img2={pokebola}
            />
          </div>
          <div className="col-sm-4 ">
            <Card 
            title={"Únete"}
            img2={pokebola} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Longcard
              title={"Reto de la Semana"}
              img={
                reto
              }
              description={"-100 Burpies"}
              description2={"-50 Sentadillas Bulgaras"}
              description3={"-Plancha de 1 minuto"}
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4">
            <Procard img={personaltrainer1} />
          </div>
          <div className="col-sm-4">
            <Procard img={kine} />
          </div>
          <div className="col-sm-4">
            <Procard img={personaltrainer2} />
          </div>
          </div>
        </div>
    </div>
    <div className="container"><InfoGym/></div>
    <div id="calendar"><Calendario/> </div>
	<div> <Comments/>   </div> 		  

</>
  );
};


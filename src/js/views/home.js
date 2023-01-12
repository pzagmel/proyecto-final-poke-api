import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import tituloinfo from "../../img/TITULOINFO.png";
import profesTitulo from "../../img/PROFESTITULO.png";
import unete from "../../img/UNETETITULO.png";
import pokebola from "../../img/pngegg 1.png";
import personaltrainer1 from "../../img/personaltrainer1.gif";
import kine from "../../img/kine.gif";
import personaltrainer2 from "../../img/personaltrainer2.gif";

import "../../styles/home.css";
import { Card } from "../component/card.js";
import { Longcard } from "../component/card.js";
import { Procard } from "../component/card.js";

export const Home = () => {
  return (

      <div className="container justify-content-center">
        <div className="row g-3 mb-2">
          <div className="col-sm-4 ">
            <Card
              img={tituloinfo}
              description={"Informacion de qué trata la app"}
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              img={profesTitulo}
              description={"Conoce a nuestros profesionales"}
            />
          </div>
          <div className="col-sm-4 ">
            <Card img={unete} img2={pokebola} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Longcard
              title={"Reto de la Semana"}
              img={
                "https://lmimirror3pvr.azureedge.net/static/media/18461/22b355e1-db06-4491-b67c-f00048f78b99/training-load-960x540.jpg"
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

  );
};

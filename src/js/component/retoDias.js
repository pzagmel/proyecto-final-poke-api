import React, { useState, useEffect } from "react";
import { Longcard } from "../component/card.js";
import reto from "../../img/Tu Desafio.png";
import "../../styles/retoDias.css";




const retoDias = () => {
  const [day, setDay] = useState(null);

  useEffect(() => {
    const currentDay = new Date().getDay();
    setDay(currentDay);
  }, []);

  return (
    <div>
      {day && (
        <>
          {(() => {
            switch (day) {
              case 0:
                return <div className="retoDia">Este es el reto de hoy Domingo: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-Descansa"}
                /></div></div>;
              case 1:
                return <div className="retoDia">Este es el reto de hoy Lunes: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-100 Burpies"}
                description2={"-50 Sentadillas Bulgaras"}
                description3={"-Cardio de 30 minutos"}
                /></div></div>;
              case 2:
                return <div className="retoDia">Este es el reto de hoy Martes: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-500 Burpies"}
                description2={"-200 Sentadillas Bulgaras"}
                description3={"-Plancha de 2 minutos"}
                /></div></div>;
              case 3:
                return <div className="retoDia">Este es el reto de hoy Miércoles: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-100 Burpies"}
                description2={"-100 Sentadillas Bulgaras"}
                description3={"-Plancha de 1 minuto"}
                /></div></div>;
              case 4:
                return <div className="retoDia">Este es el reto de hoy Jueves: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-150 Burpies"}
                description2={"-150 Sentadillas Bulgaras"}
                description3={"-Plancha de 1 minuto"}
                /></div></div>;
              case 5:
                return <div className="retoDia">Este es el reto de hoy Viernes: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-100 Burpies"}
                description2={"-50 Sentadillas Bulgaras"}
                description3={"-Plancha de 1 minuto"}
                /></div></div>;
              case 6:
                return <div className="retoDia">Este es el reto de hoy Sábado: <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-50 Burpies"}
                description2={"-100 Sentadillas Bulgaras"}
                description3={"-Plancha de 2 minutos"}
                /></div></div>;
              default:
                return <div className="retoDia">Este es el reto de hoy <div><Longcard
                title={"Reto del Día"}
                img={
                reto
                }
                description={"-Cardio 30 minutos"}
                description2={"-100 Abdominales"}
                description3={"-Estiramiento 5 minutos"}
                /></div></div>;
            }
          })()}
        </>
      )}
    </div>
  );
};

export default retoDias;

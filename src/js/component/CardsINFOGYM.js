import React from "react";
import "../../styles/InfoGym.css";
import M1 from "../../img/Machop.png"
import M2 from "../../img/Machoke.png"
import M3 from "../../img/Machamp.png"
import CirculoFooter1 from "../../img/CirculoFooter1.png"
import CirculoFooter2 from "../../img/CirculoFooter 2.png"
import CirculoFooter3 from "../../img/CirculoFooter 3.png"
import CirculoFooter4 from "../../img/CirculoFooter 4.png"
import pokebola from "../../img/POKEBOLA.png"

export const InfoGym = ({
    ImgPokemon,
    TituloInfoGYM,
    DescripcionInfoGYM,
    }) => {
    return (
    <div>
         
      <Card className="infogym">
        <Card.Img variant="top" src={ImgPokemon} />
        <Card.Body className="info1">
          <Card.Title><h1 className="tituloinfo">{TituloInfoGYM}</h1></Card.Title>
          <Card.Text>
            <h3>{DescripcionInfoGYM}</h3>
          </Card.Text>
        </Card.Body> 
      </Card>
     <div><img id="img" src={pokebola}/></div>
      
   

    </div>
    
    
    
);
};

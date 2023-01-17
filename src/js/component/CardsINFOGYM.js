import React, { Component } from "react";
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
               {/*  <img src={CirculoFooter1}/>
				<img src={CirculoFooter2}/>
				<img src={CirculoFooter3}/>
				<img src={CirculoFooter4}/>
     */}
    <div className="" id="Padre">
        <div>
        <div id="PrimeraRow" className="row-4">
            <img id="Pk1" src={ImgPokemon} style={{width: 100, height: "auto"}}/>
            <h1>{TituloInfoGYM}</h1>
            <p> {DescripcionInfoGYM}</p>
        </div>   
    </div>

    </div>
    </div>
    
    
);
};

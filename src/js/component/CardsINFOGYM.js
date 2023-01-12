import React, { Component } from "react";
import M1 from "../../img/Machop.png"
import M2 from "../../img/Machoke.png"
import M3 from "../../img/Machamp.png"
import CirculoFooter1 from "../../img/CirculoFooter1.png"
import CirculoFooter2 from "../../img/CirculoFooter 2.png"
import CirculoFooter3 from "../../img/CirculoFooter 3.png"
import CirculoFooter4 from "../../img/CirculoFooter 4.png"
import pokebola from "../../img/POKEBOLA.png"

export const InfoGym = () => (
    <div>
               {/*  <img src={CirculoFooter1}/>
				<img src={CirculoFooter2}/>
				<img src={CirculoFooter3}/>
				<img src={CirculoFooter4}/>
     */}
    <div className="container" style={{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
        
        <div>
            <img src={M1} style={{width: "30%", height: "auto"}}/>
            <h1>Evoluciona</h1>
            <p> En este gimnasio podrás hacer ejercicio y ver tu evolución igual a tu pokemon favorito </p>
        </div>
        <div>
            <img src={M2} style={{width: "30%", height: "auto"}}/>
            <h1>Ejercita</h1>
            <p> Dependiendo del peso que vayas aumentando y tu constancia</p>
        </div>
        <div>
            <img src={M3} style={{width: "30%", height: "auto"}}/>
            <h1>Se tu mejor versión</h1>
            <p> Podrás convertirte en tu pokemon favorito, siendo fuerte y teniendo un estado física ideal</p>
        </div>
    </div>
    <img src={pokebola}/>
    </div>

);

import React from "react";
import toalla from "../../img/toalla.png";
import botella from "../../img/botella.png";
import Zapatilla from "../../img/zapatilla.png";
import deporte from "../../img/deporte.png"
import "../../styles/iconoscard.css"

export const Iconos =() => {
    return(
      
      <div className=" container iconodeportivo">
      
      <div className="row g-0 text-center">
        <div className="col-6 col-md-3 icono"> <h1 className=" titulodeiconosdeportivo"> COSAS PARA LLEVAR</h1></div></div> 
       <div className=" col-sm-6 col-md-9 superioricono">
        <div className="row" id="iconoimgsuperior">
        <div className="imgicono"><img classsName="imgicono" src={toalla} alt=""/></div>
        <div className="imgicono"><img classsName="imgicono" src={botella} alt=""/></div>
        </div>
        <div className="infoiconosuperior">
            <p className="informaciondelicono">Toalla</p>
            <p className="informaciondelicono">Agua</p>
        </div>
            <div className="row" id="iconoimginferior">
        <div className="imgicono"><img classsName="imgicono" src={Zapatilla} alt=""/></div>
        <div className="imgicono"><img classsName="imgicono" src={deporte} alt=""/></div>
        </div>
        <div className="infoiconoinferior">
            <p className="informaciondelicono">Zapatillas Sport</p>
            <p className="informaciondelicono">Ropa Comoda</p>
        </div>
       
       </div>
       </div>
    )
}
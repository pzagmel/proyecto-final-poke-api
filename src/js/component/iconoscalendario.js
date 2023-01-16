import React from "react";
import toalla from "../../img/toalla.png";
import botella from "../../img/botella.png";
import Zapatilla from "../../img/zapatilla.png";
import deporte from "../../img/deporte.png"

export const Iconos =() => {
    return(
       <>
      <div className="container icono">
        <div className="superioricono">
            <div>
                <img src={toalla} alt=""/>
                <img src={botella} alt=""/>
            </div>
        </div>
        <div className="inferioricono">
        <img src={Zapatilla} alt=""/>
        <img src={deporte} alt=""/>
        </div>
      </div>
       </>
    )
}
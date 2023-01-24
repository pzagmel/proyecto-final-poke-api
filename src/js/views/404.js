import React from "react";
import Pikachu404 from "../../img/pika404.gif"
import "../../styles/error404.css"

export const Error404 = () => {
    return(
    
        <div className="row pikachu404">
          < div className="row pikachu404"><h1 className="pikachu404">UPS! Pikachu se perdio</h1>
             <h2 className="pikachu404">ERROR 404</h2>
             </div>
            <img className="error404" src={Pikachu404} alt="pikachu404" />
        </div>
   
    )
}
import React from "react";
import Machop from "../../img/Machop.png";


export const Fichaevaluacion = ()=> {
    return(
<div className="ejercicioscard mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Machop} className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      
<h5 className="card-titleficha text-center">Ficha de evaluacion profesional</h5>
    <h6 className="card-subtitle mb-2 text-center">Informacion general</h6>   
    <table className="table asd">
  <thead id="headtableinfo">
    <tr>
      <th id="thficha" scope="col">Peso (kg)</th>
      <th id="thficha" scope="col">Estatura (cm)</th>
      <th id="thficha" scope="col">% de Grasa</th>
      <th id="thficha" scope="col">% de Músculo</th>
    </tr>
  </thead>
  <tbody id="bodytableinfo" className="table-group-divider">
    <tr>
      <td id="tdficha" scope="row">70</td>
      <td id="tdficha">170</td>
      <td id="tdficha">40</td>
      <td id="tdficha">25</td>
    </tr>
    </tbody>
    </table> 
        <h5 className="card-titleretro text-center">Retroalomentacion del profesional</h5>  
        <div id="cardtextretro">
        
        </div>
        <div className="cardejercicios text-center">
        <h5 className="card-titlejercicios">TU PLAN DE ENTRENAMIENTO</h5>
        <p className="card-textejercicios">Aqui van los ejercicios</p>
      </div>
    </div>
  </div>
</div>
);
};
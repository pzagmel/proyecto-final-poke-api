import React from "react";
import Machop from "../../img/Machop.png";
export const Fichaevaluacionpro = ()=> {
    return(
<div className="card">
  <div className="card-body">
    <h5 className="card-titleficha text-center">Ficha de evaluacion profesional</h5>
    <h6 className="card-subtitle mb-2 text-muted">Informacion general</h6>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Peso</th>
      <th scope="col">Estatura</th>
      <th scope="col">% de Grasa</th>
      <th scope="col">% de Músculo</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <td scope="row">70kg</td>
      <td>170cm</td>
      <td>40%</td>
      <td>25%</td>
    </tr>
    </tbody>
    </table>
    <p className="cardficha-text">
        <p>Objetivo: Ganar masa muscular, disminuir % de grasa, mejorar capacidad aerobica</p>
    <p> Retroalomentacion del profesional: </p>
    </p>  

  </div>
</div>      
    );
};
export const Fichaejercicios = ()=> {
    return(
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Machop} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">TUS EJERCICIOS</h5>
        <p className="card-text">Aqui van los ejercicios</p>
      </div>
    </div>
  </div>
</div>
);
};
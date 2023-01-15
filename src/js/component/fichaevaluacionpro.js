import React from "react";

export const Fichaevaluacionpro = ()=> {
    return(
<div className="card" style={{"width": "50rem;"}}>
  <div className="card-body">
    <h5 className="card-title">Ficha de evaluacion profesional</h5>
    <h6 className="card-subtitle mb-2 text-muted">Informacion general</h6>
    
        <div className="table">
            <tr>
                <td>Peso</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>Talla</td>
                <td>170cm</td>
            </tr>
            <tr>
                <td>% de Grasa</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>% de Masa Muscular</td>
                <td>28%</td>
            </tr>
        </div>
    <p className="card-text">
        <div>Objetivo: Ganar masa muscular, disminuir % de grasa, mejorar capacidad aerobica</div>
    <div> Retroalomentacion del profesional:</div>
    </p>  

  </div>
</div>      
    );
};
export const Fichaejercicios = ()=> {
    return(
<div className="card mb-3" style={{"max-width": "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">TUS EJERCICIOS</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
);
};
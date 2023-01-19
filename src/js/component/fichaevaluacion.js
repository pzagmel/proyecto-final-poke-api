import React from "react";
import Machop from "../../img/Machop.png";

window.onload = function () {
  const botonNivel1 = document.querySelector(".Nivel1");
  const contenedor = document.querySelector(".PadreNivel1");

  const botonNivel2 = document.querySelector(".Nivel2");
  const contenedor1 = document.querySelector(".PadreNivel2");

  const botonNivel3 = document.querySelector(".Nivel3");
  const contenedor2 = document.querySelector(".PadreNivel3");

  botonNivel1.addEventListener("click", () => {
    contenedor.classList.toggle("aumentado1");
  });

  botonNivel2.addEventListener("click", () => {
    contenedor1.classList.toggle("aumentado2");
  });

  botonNivel3.addEventListener("click", () => {
    contenedor2.classList.toggle("aumentado3");
  });
};

export const Fichaevaluacion = () => {
  return (
    <div className="ejercicioscard mb-3 ">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Machop} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <h5 className="card-titleficha text-center">
            Ficha de evaluacion profesional
          </h5>
          <h6 className="card-subtitle mb-2 text-center">
            Informacion general
          </h6>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead id="headtableinfo">
                <tr>
                  <th id="thficha" scope="col">
                    Peso (kg)
                  </th>
                  <th id="thficha" scope="col">
                    Estatura (cm)
                  </th>
                  <th id="thficha" scope="col">
                    % de Grasa
                  </th>
                  <th id="thficha" scope="col">
                    % de Músculo
                  </th>
                </tr>
              </thead>
              <tbody id="bodytableinfo" className="table-group-divider">
                <tr>
                  <td id="tdficha" scope="row">
                    70
                  </td>
                  <td id="tdficha">170</td>
                  <td id="tdficha">40</td>
                  <td id="tdficha">25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className="card-titleretro">Retroalomentacion del profesional</h5>
          <div className="row cardtextretro">
            <div className="col-sm-12">
              Pepito realiza correctamente sus ejercicios con Xkilogramos, de
              seguir asi aumentaremos el peso y repeticiones.
            </div>
          </div>
        </div>
        <div className="cardejercicios">
          <h5 className="card-titlejercicios">Tu Plan De Entrenamiento</h5>
          <div>
            <div className="row">
              <div className="PadreNivel1">
                <div className="Nivel1">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                    value="option1"
                  >
                    Nivel 1
                  </button>
                  <div className="collapse" id="collapseExample1">
                    <p>Levanta pesas entre los 5 y 10Kg / Ejercicio aeróbico de baja intensidad en bicicleta, trotadora o elíptica / Entrena 3 veces por semana</p>
                  </div>
                </div>
              </div>
              <div className="PadreNivel2">
                <div className="Nivel2">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                      value="option2"
                    >
                      Nivel 2
                    </button>
                    <div className="collapse" id="collapseExample2">
                      <p>Podrás levantar pesas entre los 10 y 20Kg / Ejercicio aeróbico de mediana intensidad / Entrena 4 veces por semana</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="PadreNivel3">
                <div className="Nivel3">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                      value="option3"
                    >
                      Nivel 3
                    </button>
                    <div className="collapse" id="collapseExample3">
                      <p>Podrás levantar pesas sobre los 20Kg / Ejercicio aeróbico de mediana/alta intensidad / Entrena 5 veces por semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

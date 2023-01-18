import React from "react";
import Machop from "../../img/Machop.png";

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
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Nivel 1
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked
              />
              <label class="form-check-label" for="exampleRadios2">
                Nivel 2
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                cheked
              />
              <label class="form-check-label" for="exampleRadios3">
                Nivel 3
              </label>
            </div>
            <div>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Nivel 1
              </button>
              <div className="collapse" id="collapseExample">
                <div className="card card-bodyyy">
                  Levantarás pesas de entre 5 y 10kg
                </div>
              </div>
              </div>
              <div>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample1"
                value="option1"
                disabled
              >
                Nivel 2
              </button>
              <div className="collapse" id="collapseExample1">
                <div className="card card-bodyyy">
                  Levantarás pesas de entre 10 y 20kg
                </div>
              </div>
              
            </div>
            <div>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
                value="option2"
                disabled
              >
                Nivel 3
              </button>
              <div className="collapse" id="collapseExample2">
                <div className="card card-bodyyy">
                  Levantarás pesas sobre los 20kg, estás mamadisimo!!
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

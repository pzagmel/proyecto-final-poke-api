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
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Niveles</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected> Musculatura</option>
                  <option value="1">
                  Barbell Curl 1 kilo - 5 kilo
                  </option>
                  <option value="2">
                  Dumbbell Curl 5 kilo - 10 kilo
                  </option>
                  <option value="3">
                  Dumbbell Hammer Curl 10kilo - 15 kilo
                  </option>
                  <option value="3">
                  Chin Ups
                  </option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Triceps</option>
                  <option value="1">Barbell Bench Press kilos - 5 kilos</option>
                  <option value="2">Dumbbell Incline Bench Press 5 kilos - 10 kilos</option>
                  <option value="3">Barbell Upright Row 15 + </option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Barbell Low Bar Good Morning</option>
                  <option value="1">
                      5 kilos - 10 kilos
                  </option>
                  <option value="2">
                    5 kilo - 10 kilo
                  </option>
                  <option value="3">
                     10kilo - 15 kilo
                  </option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>abdominales</option>
                  <option value="1">Hand Plank 60 segundos 3 repeticiones</option>
                  <option value="2">Crunches 30 repeticiones</option>
                  <option value="3">Forearm Plank 60 segundos 5 repeticiones </option>
                </select>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>abdominales</option>
                  <option value="1">Forward Lunges 30 repeticiones por lado</option>
                  <option value="2">Barbell Hip Thrust 15 levantadas por 3 secciones</option>
                  <option value="3">Barbell Squat 5 - 20 kilos  10 levantadas por 3 secciones </option>
                </select>
                
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>cardio</option>
                  <option value="1">trotadora 25 minutos </option>
                  <option value="2">Eliptica 25 minutos</option>
                  <option value="3">bicicleta  30 minutos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

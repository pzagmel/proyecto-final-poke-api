import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


// window.onload = function () {
//   const botonNivel1 = document.querySelector(".hijo1");
//   const contenedor = document.querySelector(".Nivel1");

//   const botonNivel2 = document.querySelector(".hijo2");
//   const contenedor1 = document.querySelector(".PadreNivel2");

//   const botonNivel3 = document.querySelector(".hijo3");
//   const contenedor2 = document.querySelector(".PadreNivel3");

//   botonNivel1.addEventListener("click", () => {
//     contenedor.classList.toggle("aumentado1");
//   });

//   botonNivel2.addEventListener("click", () => {
//     contenedor1.classList.toggle("aumentado2");
//   });

//   botonNivel3.addEventListener("click", () => {
//     contenedor2.classList.toggle("aumentado3");
//   });
// };

export const Fichaevaluacion = ({
  
  peso,
  porcentaje_musculo,
  porcentaje_grasa,
  nivel,
}) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const poke = nivel == 1 ? 66 : nivel == 2 ? 67 : nivel == 3 ? 68 : 66;
    actions.getPokemon(poke);
  }, []);

  return (
    <div className="ejercicioscard mb-3 ">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={store.pokemon} className="img-fluid rounded-start" />
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
                    {peso}
                  </td>
                  <td id="tdficha">{porcentaje_grasa}</td>
                  <td id="tdficha">{porcentaje_musculo}</td>
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
                    className="btn btn-primary collapse-toggle"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <div className="hijo1">Nivel 1</div>
                  </button>
                  <div className="collapse" id="collapseExample"></div>
                </div>
              </div>
              <div className="PadreNivel2">
                <div className="Nivel2">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                      value="option2"
                    >
                      <div className="hijo2">Nivel 2</div>
                    </button>
                    <div className="collapse" id="collapseExample2"></div>
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
                      <div className="hijo3">Nivel 3</div>
                    </button>
                    <div className="collapse" id="collapseExample1"></div>
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

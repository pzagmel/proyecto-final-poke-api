import React,{useEffect, useContext } from "react";
import Machop from "../../img/Machop.png";
import { Context } from "../store/appContext";


export const Fichaevaluacion = () => {
  const { store, actions } = useContext(Context);
 

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
            <div className="row selectejercicio">
              <div className="PadreNivel1">
                <select
                  className="form-select form-select-lg mb-3 "
                  aria-label=".form-select-lg example"
                >
                  <option selected className="nivel">Nivel</option>
                  <option className="nivel" value="1">1</option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected className="nivel"> Musculatura</option>
                  <option  className="nivel" value="1">
                  Barbell Curl 1 kilo - 5 kilo
                  </option>
                  <option  className="nivel" value="3">
                  Chin Ups 5 repeticiones de 5 secciones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Triceps</option>
                  <option  className="nivel" value="1">Barbell Bench Press kilos - 5 kilos</option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Barbell Low Bar Good Morning</option>
                  <option  className="nivel" value="1">
                      5 kilos - 10 kilos
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Abdominales</option>
                  <option  className="nivel" value="1">Hand Plank 60 segundos 3 repeticiones</option>
                  
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Bíceps femoral</option>
                  <option  className="nivel" value="1">Forward Lunges 30 repeticiones por lado</option>
                  
                </select>
                
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Cardio</option>
                  <option  className="nivel"value="1">trotadora 25 minutos </option>
                  <option  className="nivel"value="2">Eliptica 25 minutos</option>
                  <option  className="nivel"value="3">bicicleta  30 minutos</option>
                </select>
              </div>
            </div>
            <div className="row selectejercicio">
              <div className="PadreNivel1">
                <select
                  className="form-select form-select-lg mb-3 "
                  aria-label=".form-select-lg example"
                >
                  <option selected className="nivel">Nivel</option>
                  <option className="nivel" value="1">3</option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected className="nivel"> Musculatura</option>
                  <option  className="nivel" value="1">
                  Barbell Incline Bench Press  15 kilos - 25 kilos
                  </option>
                  <option  className="nivel" value="3">
                  Chin Ups 15 repeticiones con peso entre 10-40 kilos 3 secciones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Triceps</option>
                  <option  className="nivel" value="1">Barbell Bench Press 10 kilos - 15 kilos</option>
                </select>

                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Barbell Low Bar Good Morning</option>
                  <option  className="nivel" value="1">
                      10 kilos - 15 kilos
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Abdominales</option>
                  <option  className="nivel" value="1">Barbell Situp 10 kilos por lado 15 repeticiones 3 secciones</option>
                  <option  className="nivel" value="1">Forearm Plank 60 segundos 3 repeticiones</option>
                  
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Bíceps femoral</option>
                  <option  className="nivel" value="1">Forward Lunges 30 repeticiones por lado</option>
                  
                </select>
                
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Cardio</option>
                  <option  className="nivel"value="1">trotadora 45 minutos elevacion de montaña  </option>
                  <option  className="nivel"value="2">Eliptica 45 minutos mayor dificultad</option>
                  <option  className="nivel"value="3">bicicleta  60 minutos mayor en estado de subida</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

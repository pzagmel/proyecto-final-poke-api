import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import Machop from "../../img/Machop.png";
import { RegistroFicha } from "./registroficha";

export const Fichaevaluacion = () => {
  const { store, actions } = useContext(Context);

  const [ficha, setFicha] = useState({
    nivel: 0,
    peso: 0,
    porcentaje_grasa: 0,
    porcentaje_musculo: 0,
  });

  const llamadaCargaFicha=async()=>{
    const fetchRoute= `https://3000-lukasoy-backendpokegym-h7ytze1t944.ws-us85.gitpod.io/ficha/${store.userInfo.rol? store.fichaSelected.id:store.userInfo.id}`
    console.log(fetchRoute)
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${
        sessionStorage.getItem("token") ?? localStorage.getItem("token")
      }`
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch(
      fetchRoute,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.msg == "tienes acceso a la ficha") {
          actions.estadoFetchFicha(true);
          setFicha(result.ficha);
        } else actions.estadoFetchFicha(false);
      })
      .catch((error) => console.log("error", error));
    
  }
  useEffect(() => {
if(!store.userInfo.rol)
    llamadaCargaFicha()

   }, []);

  useEffect(() => {
   llamadaCargaFicha()
  }, [store.fichaSelected.id]);

  return (store.fetchfichaexitoso?(    
    <div className="ejercicioscard mb-3 ">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={store.pokemon} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <h5 className="card-titleficha text-center">
            Ficha de evaluación profesional
          </h5>
          <h6 className="card-subtitle mb-2 text-center">
            Información general
          </h6>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead id="headtableinfo">
                <tr>
                  <th id="thficha" scope="col">
                    Peso kg
                  </th>
                  <th id="thficha" scope="col">
                    % de Grasa
                  </th>
                  <th id="thficha" scope="col">
                    % de Músculo
                  </th>
                  <th id="thficha" scope="col">
                    Nivel
                  </th>
                </tr>
              </thead>
              <tbody id="bodytableinfo" className="table-group-divider">
                <tr>
                  <td id="tdficha" scope="row">
                    {ficha.peso}
                  </td>
                  <td id="tdficha">{ficha.porcentaje_grasa}</td>
                  <td id="tdficha">{ficha.porcentaje_musculo}</td>
                  <td id="tdficha">{ficha.nivel}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className="card-titleretro">Retroalomentacion del profesional</h5>
          <div className="row cardtextretro">
            <div className="col-sm-12">
              Estudiante realiza correctamente sus ejercicios, de seguir asi
              aumentaremos progresivamente el peso y repeticiones.
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
                  <option value={0} className="nivel">
                    Nivel
                  </option>
                  <option className="nivel" value="1">
                    1
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0} className="nivel">
                    {" "}
                    Brazos
                  </option>
                  <option className="nivel" value="1">
                    Bíceps: Flexión de codo con mancuernas 1 Kilo - 5 Kilo / 3
                    Series / 10 Repeticiones
                  </option>
                  <option className="nivel" value="3">
                    Tríceps: Extencion de codo con polea 1 Kilo - 5 Kilos / 3
                    Series / 10 Repeticiones
                  </option>
                  <option className="nivel" value="3">
                    Hombros: Elevación de hombros con mancuernas - 5 Kilos / 3
                    Series / 10 Repeticions
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Pecho</option>
                  <option className="nivel" value="1">
                    Elevación de mancuernas - 5 Kilos / 3 Series / 10
                    Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Espalda</option>
                  <option className="nivel" value="1">
                    Máquina de descenso - 10kg / 3 Series / 10 Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Abdominales</option>
                  <option className="nivel" value="1">
                    Plancha con codos extendidos por 30 segundos 3 Series
                  </option>
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Piernas</option>
                  <option className="nivel" value="1">
                    Estocadas / 30 Repeticiones por pierna
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Cardio</option>
                  <option className="nivel" value="1">
                    Trotadora 25 minutos / 5km{" "}
                  </option>
                  <option className="nivel" value="2">
                    Elíptica 25 minutos / Resistencia 5
                  </option>
                  <option className="nivel" value="3">
                    Bicicleta 30 minutos /Resistencia 5
                  </option>
                </select>
              </div>
            </div>
            <div className="row selectejercicio">
              <div className="PadreNivel1">
                <select
                  className="form-select form-select-lg mb-3 "
                  aria-label=".form-select-lg example"
                >
                  <option value={0} className="nivel">
                    Nivel
                  </option>
                  <option className="nivel" value="1">
                    2
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0} className="nivel">
                    {" "}
                    Brazos
                  </option>
                  <option className="nivel" value="1">
                    Bíceps: Flexión de codo con mancuernas 5 Kilos - 10 Kilos /
                    3 Series / 10 Repeticiones
                  </option>
                  <option className="nivel" value="1">
                    Tríceps: Extención de codo con polea 5 Kilos - 10 Kilos / 3
                    Series / 10 Repeticiones
                  </option>
                  <option className="nivel" value="3">
                    Hombros: Elevación de hombros con mancuernas 5 Kilos - 10
                    Kilos / 3 Series / 10 Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Pecho</option>
                  <option className="nivel" value="1">
                    Elevación de barra con inclinación 10 a 20 Kilos / 3 Series
                    / 10 Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Espalda</option>
                  <option className="nivel" value="1">
                    Dominadas 3 Series / 10 Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Abdominales</option>
                  <option className="nivel" value="1">
                    Plancha con codos apoyados por 60 segundos 3 Series
                  </option>
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Piernas</option>
                  <option className="nivel" value="1">
                    Máquina de extención de rodilla 10 Kilos - 20 Kilos / 3
                    Series / 10 Repeticiones{" "}
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Cardio</option>
                  <option className="nivel" value="1">
                    Trotadora 45 minutos / 7km/h / Inclinación opcional{" "}
                  </option>
                  <option className="nivel" value="2">
                    Elíptica 45 minutos / Resistencia 10
                  </option>
                  <option className="nivel" value="3">
                    Bicicleta 60 minutos / Resistencia 10
                  </option>
                </select>
              </div>
            </div>
            <div className="row selectejercicio">
              <div className="PadreNivel1">
                <select
                  className="form-select form-select-lg mb-3 "
                  aria-label=".form-select-lg example"
                >
                  <option value={0} className="nivel">
                    Nivel
                  </option>
                  <option className="nivel" value="1">
                    3
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0} className="nivel">
                    Brazos
                  </option>
                  <option className="nivel" value="1">
                    Biceps: Flexión de codo con barra 20+ Kilos / 3 Series / 10
                    Repeticiones
                  </option>
                  <option className="nivel" value="1">
                    Tríceps: Extención de codo con polea 10+ Kilos / 3 Series /
                    10 Repeticiones
                  </option>
                  <option className="nivel" value="3">
                    Hombros: Elevación de hombros con barra 15+ Kilos / 3 Series
                    / 10 Repeticiones
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  defaultValue={0}
                >
                  <option value={0}>Pecho</option>
                  <option className="nivel" value={1}>
                    Elevación de barra con inclinación 30 Kilos + / 3 Series /
                    12 Repeticions
                  </option>
                </select>

                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Espalda</option>
                  <option className="nivel" value="1">
                    Dominadas 4 Series / 10 Repeticiones / 5 Kilos o +
                  </option>
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Abdominales</option>
                  <option className="nivel" value="1">
                    Barbell Situp 10 kilos 3 Series 15 / Repeticiones
                  </option>
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Piernas</option>
                  <option className="nivel" value="1">
                    Sentadillas con barra 30kg + / 4 Series / 12 Repeticiones
                  </option>
                </select>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value={0}>Cardio</option>
                  <option className="nivel" value="1">
                    Trotadora 60 minutos / 8km/h / Inclinación opcional
                  </option>
                  <option className="nivel" value="2">
                    Eliptica 60 minutos / Resistencia +10
                  </option>
                  <option className="nivel" value="3">
                    Bicicleta 60 minutos / Resistencia 10+
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (store.userInfo.rol && <RegistroFicha/>));
};

import React from "react";
import "../../styles/home.css";
import Pokebola from "../../img/POKEBOLA.png"
import { Pilates } from "./modalcalendario/Pilates";
import { GymBall } from "./modalcalendario/gymball";


export const Calendario = () => {
    return(
        <div className="container-fluid calen" id="calendario"> 
        <div className="diseño3">
          <div className="poke-cale"><img className="pokecale" src={Pokebola} alt=""/></div>
          <div className="titulo-calendario"><h1 className="titulocalendario">CALENDARIO</h1> </div>
          <div><img className="pokecale"src={Pokebola} alt=""/></div>
          </div>
        <div className="calendario"> 
        <table className="tablepoke">
  <thead className="calendariopoke">
    <tr className="tabladedias">
      <th scope="col diadelcalendario"> <p className="diashoras">HORA</p></th>
      <th scope="col diadelcalendario"><p className="diashoras">LUNES</p></th>
      <th scope="col diadelcalendario"><p className="diashoras">MARTES</p></th>
      <th scope="col diadelcalendario"><p className="diashoras">MIERCOLES</p></th>
      <th scope="col diadelcalendario"><p className="diashoras">JUEVES</p></th>
      <th scope="col diadelcalendario"><p className="diashoras">VIERNES</p></th>
      
    </tr>
  </thead>
  <tbody className="poketablaejercicio" >
    <tr className="filadehorariodeejercicio">
      <th scope="row horariocalendario" style={{fontSize:30}}>8:00</th>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><GymBall/></td>
      <td className="espaciodeejercicio"></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario" style={{fontSize:30}}>10:00</th>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Pilates/></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario" style={{fontSize:30}}>12:00</th>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario" style={{fontSize:30}}>14:00</th>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario" style={{fontSize:30}}>15:00</th>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Pilates/></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario" style={{fontSize:30}}>16:00 </th>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
    </tr>
  </tbody>
</table>
</div>    
    </div>
    )
}
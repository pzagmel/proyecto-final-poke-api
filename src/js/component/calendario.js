import React from "react";
import "../../styles/home.css";
import Pokebola from "../../img/POKEBOLA.png"
import { Modal } from "./modalcalendario";
import { Hiit } from "./modalcalendario";
import { ProCycling } from "./modalcalendario";
import { Pilates } from "./modalcalendario";
export const Calendario = () => {
    return(
        <div className="container calen"> 
        <div className="diseño3">
          <img className="pokecale" src={Pokebola} alt=""/><h1 className="titulocalendario">CALENDARIO</h1> <img className="pokecale"src={Pokebola} alt=""/></div>
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
      <th scope="row horariocalendario">8:00</th>
      <td className="espaciodeejercicio"><Modal/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario">10:00</th>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"><Hiit/></td>
      <td className="espaciodeejercicio"><Modal/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><ProCycling/></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario">12:00</th>
      <td className="espaciodeejercicio"><Hiit/></td>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><ProCycling/></td>
      <td className="espaciodeejercicio"><Modal/></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario">14:00</th>
      <td className="espaciodeejercicio"><ProCycling/></td>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Modal/></td>
      <td className="espaciodeejercicio"><Hiit/></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario">15:00</th>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"><Hiit/></td>
      <td className="espaciodeejercicio"><ProCycling/></td>
      <td className="espaciodeejercicio"></td>
      <td className="espaciodeejercicio"></td>
    </tr>
    <tr className="filadehorariodeejercicio">
      <th scope="row  horariocalendario">16:00 </th>
      <td className="espaciodeejercicio"><Modal/></td>
      <td className="espaciodeejercicio"><ProCycling/></td>
      <td className="espaciodeejercicio"><Hiit/></td>
      <td className="espaciodeejercicio"><Pilates/></td>
      <td className="espaciodeejercicio"></td>
    </tr>
  </tbody>
</table>
</div>
      
         
    </div>
    )
}
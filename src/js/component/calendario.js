import React from "react";
import "../../styles/home.css";
import Pokebola from "../../img/POKEBOLA.png"
import { Modal } from "./modalcalendario";
export const Calendario = () => {
    return(
        <div className="container calen"> 
        <div className="diseño3">
          <img className="pokecale" src={Pokebola} alt=""/><h1 className="titulocalendario">CALENDARIO</h1> <img className="pokecale"src={Pokebola} alt=""/></div>
        <div className="calendario">
          
      <table className="tablacalen">
        <thead>
          <caption>
            HORARIO
          </caption>
          <th>lUNES</th>
          <th>MARTES</th>
          <th>MIERCOLES</th>
          <th>JUEVES</th>
          <th>VIERNES</th>
        </thead>
        <tbody>
          <tr>
            <td className="hora"> 8:00am</td>
            <td><Modal/></td>
            <td>1102</td>
            <td>902</td>
            <td>901</td>
            <td>1101</td>
            
          </tr>
          <tr>
            <td className="hora">9:00</td>
            <td>1002</td>
            <td>902</td>
            <td>1102</td>
            <td>901</td>
            <td>1101</td>
            
          </tr>
          <tr>
            <td className="hora">10:00</td>
            <td>1101</td>
            <td>1002</td>
            <td>1102</td>
            <td>801</td>
            <td>1002</td>
            
          </tr>
          <tr>
            <td className="hora">11:00</td>
            <td>FREE</td>
            <td>1002</td>
            <td>1002</td>
            <td>FREE</td>
            <td>1002</td>
            
          </tr>
          <tr>
            <td className="hora">12:00</td>
            <td>moda</td>
            <td>moda</td>
            <td>moda</td>
            <td>moda</td>
            <td>moda</td>
            
          </tr>
          <tr>
            <td className="hora">13:00</td>
            <td>descanso</td>
            <td>descanso</td>
            <td>descanso</td>
            <td>descanso</td>
            <td>descanso</td>
           
          </tr>
          <tr>
            <td className="hora">15:00</td>
            <td>1002</td>
            <td>801</td>
            <td>ATENCION</td>
            <td>1102</td>
            <td>1102</td>
          </tr>
          <tr>
            <td className="hora">16:00</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>1002</td>
          </tr>
          
        </tbody>
      </table>
    </div>
      </div>
    )
}
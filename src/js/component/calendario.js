import React from "react";
import "../../styles/home.css";

export const Calendario = () => {
    return(
        <div className="container" id="calendar"> 
         <div>
      <table>
        <thead>
          <caption>
            HORARIO
          </caption>
          <th>HORA</th>
          <th>lUNES</th>
          <th>MARTES</th>
          <th>MIERCOLES</th>
          <th>JUEVES</th>
          <th>VIERNES</th>
        </thead>
        <tbody>
          <tr>
            <td>7:00am - 8:00am</td>
            <td>FREE</td>
            <td>1102</td>
            <td>902</td>
            <td>901</td>
            <td>1101</td>
          </tr>
          <tr>
            <td>8:00am - 8:50am</td>
            <td>1002</td>
            <td>902</td>
            <td>1102</td>
            <td>901</td>
            <td>1101</td>
          </tr>
          <tr>
            <td>8:50am - 9:40am</td>
            <td>1101</td>
            <td>1002</td>
            <td>1102</td>
            <td>801</td>
            <td>1002</td>
          </tr>
          <tr>
            <td>9:40am - 10:30am</td>
            <td>FREE</td>
            <td>1002</td>
            <td>1002</td>
            <td>FREE</td>
            <td>1002</td>
          </tr>
          <tr>
            <td>10:30am - 11:20am</td>
            <td>DESCANSO</td>
            <td>DESCANSO</td>
            <td>DESCANSO</td>
            <td>DESCANSO</td>
            <td>DESCANSO</td>
          </tr>
          <tr>
            <td>11:20am - 12:10pm</td>
            <td>1001</td>
            <td>802</td>
            <td>1101</td>
            <td>1101</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>12:10am - 1:00pm</td>
            <td>1002</td>
            <td>801</td>
            <td>ATENCION</td>
            <td>1102</td>
            <td>1102</td>
          </tr>
          <tr>
            <td>1:00pm - 1:50pm</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>FREE</td>
            <td>1002</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6">
              APLICA PARTA EL PROFESOR CAMILO
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
      </div>
    )
}
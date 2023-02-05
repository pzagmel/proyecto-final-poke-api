import React from "react";
import BannerModal from"../../../img/bannermodal.png"
import { Iconos } from "../iconoscalendario";

export const GymBall = () => {
    return(
        <>
        {/* buttom */}
<button type="button" className="btn btn-primary modaldeejercicio" data-bs-toggle="modal" data-bs-target="#exampleModal">
  GYM BALL
 
</button>

{/* <!-- Modal --> */}
<div className="modalcalen">
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <p className="modal-title fs-5" id="exampleModalLabel"><h1 className="titulodemodalejercicio">GYM BALL</h1></p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <div className="tituloejercicio">
          <div className="infoejercicio">Intencidad</div>
        <div className="infoejercicio">Duración</div>
        <div className="infoejerciciolvl">Lvl</div>
        <div className="infoejercicioFT">Fitnes Type</div>
      </div>
      <hr/>
      <div className="tipoejercicio">
        <div className="infoejercicio1m">Medium</div>
        <div className="infoejercicio1t">45 Mins</div>
        <div className="infoejercicio1">Moderado</div>
        <div className="infoejercicio1g">Grupal</div>
      </div>
      <div className="iconos">
     <img src={BannerModal} alt=""/>
      </div>
      <Iconos/>
      </div>
      </div>
    </div>
  </div>
  </div>

   </> )
}
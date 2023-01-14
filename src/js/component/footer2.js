import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../img/LOGOPOKEGYM.png"
import FB from "../../img/FB.png"
import MAIL from "../../img/MAIL.png"
import TW from "../../img/TW.png"
import IG from "../../img/IG.png"
import { FaMapMarkerAlt, FaGlobe, FaMapPin, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

/* creo un segundo footer para realizar nuevo diseño */
export const Footergp = () => {
    return(
 <div>
  <footer className="footer">
            <div className="footer-left">
               <Link to="/" ><img src={Logo}  className="" width="250" alt=""/></Link>
               <h1 className="titulo">GYMPOKE</h1>
            <div className="rrss ">
         <img className="IG" src={IG} />
		 <img className="FB"src={FB} />
		 <img className="TW"src={TW} />
		 <img className="MAIL" src={MAIL} />
        </div>
        </div>
        <ul className="footer-right list-unstyled"> 
                <li className="info"></li>
                <li  className="info"></li>
                <li  className="info"></li>
            
                <li  className="info"></li>
                <li  className="info"></li>
             </ul>
             <ul className="footer-right list-unstyled"> 
                <li className="info"></li>
                <li  className="info"></li>
                <li  className="info"></li>
            
                <li  className="info"></li>
                <li  className="info"></li>
             </ul>

             <ul className="footer-right list-unstyled"> 
                <li className="info"><FaMapMarkerAlt/> Direccion Av. Chile</li>
                <li  className="info"><FaGlobe/> Region de Chile</li>
                <li  className="info"><FaMapPin/> Comuna de Chile</li>
            
                <li  className="info"><FaPhoneAlt/> +569 xxxx xxxx</li>
                <li  className="info"><FaRegEnvelope/> pokegym@pokegym.cl</li>
             </ul>
             <br/>
            <div className="footer-bottom"><p>All Right reserved by conceptial 2022</p></div>
  </footer>
  </div>
  
    )
}
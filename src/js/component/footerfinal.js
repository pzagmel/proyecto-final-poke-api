import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../img/LOGOPOKEGYM.png"
import FB from "../../img/FB.png"
import MAIL from "../../img/MAIL.png"
import TW from "../../img/TW.png"
import IG from "../../img/IG.png"
import { FaMapMarkerAlt, FaGlobe,  FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export const Footerf = () => {

    return(
        
         
           <div className="row">
             <div className="infoweb" >
                   <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div>
            <Link to="/" ><img src={Logo}  className="logofinalfooter" width="250" alt=""/></Link>
            </div>
            <div className="iconofooter">
            <a className="iconofooter"href="#"><img src={FB} className="iconofooter"/></a>
            <a className="iconofooter"href="#"><img src={MAIL} className="iconofooter"/></a>
            <a className="iconofooter"href="#"><img src={TW} className="iconofooter"/></a>
            <a className="iconofooter"href="#"><img src={IG} className="iconofooter"/></a>
            </div> 
        </div> 
        <div className=" col-sm-6 col-md-6 col-lg-6 col-xl-6 pull-xs-left">
                        <a className="nav-item nav-link" href="#"><FaMapMarkerAlt/> Direccion Av. Chile</a>
                        <a className="nav-item nav-link" href="#"><FaGlobe/> Chile</a>
                        <a className="nav-item nav-link" href="#"><FaPhoneAlt/> +569 xxxx xxxx</a>
                        <a className="nav-item nav-link" href="#"><FaRegEnvelope/> pokegym@pokegym.cl</a>
                    </div>
                </div>
                </div> 
               
            
    
       
    )
}
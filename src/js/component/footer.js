import React, { Component } from "react";
import logoprincipal from "../../img/LOGOPOKEGYM.png"
import "../../styles/Footer.css";
import CirculoFooter1 from "../../img/CirculoFooter1.png"
import CirculoFooter2 from "../../img/CirculoFooter 2.png"
import CirculoFooter3 from "../../img/CirculoFooter 3.png"
import CirculoFooter4 from "../../img/CirculoFooter 4.png"
import FB from "../../img/FB.png"
import MAIL from "../../img/MAIL.png"
import TW from "../../img/TW.png"
import IG from "../../img/IG.png"

export const Footer = () => (
	<footer>
		<div id="footer-container">
			{/* <div>
				<img className="Circulo1" src={CirculoFooter1}/>
				<img className="Circulo2" src={CirculoFooter2}/>
				<img className="Circulo3" src={CirculoFooter3}/>
				<img className="Circulo4" src={CirculoFooter4}/>

			</div> */}

			<div id="footer-content-container">
				<div>
			<img src={logoprincipal} className="website-logo"/>
			</div>
			
			<div className="footer-menus">
			<div className="footer-content-container">
				<div className="menu-item-footer">
					<p>Av. Tanto Tanto,
					Comuna Tanto, 
					Region (?)
					Chile?
					</p>
				</div>
				<div className="menu-item-footer">
				<p>+569 xxxx xxxx
				pokegym@pokegym.cl
				</p>
				</div>
			</div>
			</div>
			<div className="social-container">
				<span className="menu-title"> Siguenos </span>
				<div className="social-link">
				<img className="IG" src={IG} style={{left: 49}}/>
				<img className="FB"src={FB} style={{left: 171}}/>
				<img className="TW"src={TW} style={{left: 290}}/>
				<img className="MAIL" src={MAIL} style={{left: 435}}/>
					</div>	
			</div>
			
		</div>
		</div>
		<div className="copyright-container">
		<p className="copyright"> Copyright @2023. Todos los derechos reservados </p>
		</div>
	</footer>
);

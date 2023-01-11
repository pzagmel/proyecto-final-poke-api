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
	<footer className="footer mt-auto py-3 text-center">
		<div className="BoxFooter1">
			<div>
				<img src={CirculoFooter1}/>
				<img src={CirculoFooter2}/>
				<img src={CirculoFooter3}/>
				<img src={CirculoFooter4}/>

			</div>
			<div>
			<img src={logoprincipal}/>
			</div>
			<div className="RRSS">
				<img className="IG" src={IG} style={{left: 49}}/>
				<img className="FB"src={FB} style={{left: 171}}/>
				<img className="TW"src={TW} style={{left: 290}}/>
				<img className="MAIL" src={MAIL} style={{left: 435}}/>
			</div>
			<div>
				<div>Av. Tanto Tanto,
					Comuna Tanto, 
					Region (?)
					Chile?
				</div>
				<div>
				+569 xxxx xxxx
				pokegym@pokegym.cl
				</div>
			</div>
		</div>
		<p className="Copyright"> Copyright @2023. Todos los derechos reservados </p>
	</footer>
);

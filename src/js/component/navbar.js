import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import iconCalendar from "../../img/icon-calendar.png"
import iconLogin from "../../img/icon-login.png"
import "../../styles/navbar.css";



export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg nav-style">
		  <div className="container-fluid">
			<div className="navbar-header logo">
			  <Link className="navbar-brand" to="/">
				<img className="logo-gym" src={logo} alt="Logo" />
			  </Link>
			</div>
			<ul className="navbar-nav ml-auto iconos">
				<li className="nav-item d-none d-sm-block">
					<Link className="nav-link" to="/">
						<span>Ir al calendario</span>
				 		 <img className="img-icon" src={iconCalendar} alt="Icono calendario" />
					</Link>
			  	</li>
			  	<li className="nav-item d-none d-sm-block">
					<Link className="nav-link" to="/">
				 		 <img className="img-icon" src={iconLogin} alt="Icono usuario" />
					</Link>
			 	 </li>
			</ul>
		  </div>
		</nav>
	  );
	};

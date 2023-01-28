import React, { useState } from "react";
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
					<Link className="nav-link" to="/#calendar">
				 		 <img className="img-icon img-calendar" src={iconCalendar} alt="Icono calendario" />
					</Link>
			  	</li>
			  	<li className="nav-item d-none d-sm-block">
					<Link className="nav-link" to="/login">
				 		 <img className="img-icon" src={iconLogin} alt="Icono usuario" />
					</Link>
			 	 </li>
			</ul>
		  </div>
		</nav>
	  );
	};

export const Navbar2 = () => {
		const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mobile-menu">
      <button className="button-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Cerrar Menu" : "Abrir Menu"}
      </button>
      {menuOpen && (
		<div className="ul-li">
        <ul>
          <li>
            <a href="/#calendar">Ir al Calendario</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
		</div>
      )}
    </nav>
  );
};
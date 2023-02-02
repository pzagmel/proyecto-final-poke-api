import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logofinal.png"
import Logout from "../../img/logout.png"
import Pokebola from "../../img/registrar.png"
import Perfil from "../../img/perfillisto.png"
import login from "../../img/loggin.png"
import "../../styles/navbar.css";
import { Context } from "../store/appContext";
import { useInternalNotification } from "antd/es/notification/useNotification";





export const Navbar = () => {
	const { store, actions } = useContext(Context);





	return (
		<nav className="navbar navbar-expand-lg nav-style">
			<div className="container-fluid">
				<div className="navbar-header logo">
					<Link className="navbar-brand" to="/">
						<img className="logo-gym" src={logo} alt="Logo" />
					</Link>
				</div>
				<div className="titupok"><h1 className="titulonavbar">POKEGYM</h1></div>
				<ul className="navbar-nav ml-auto iconos">

					{!store.token ? (
						<li className="nav-item d-none d-sm-block">
							<Link to="/register">
								<img className="img-icon" src={Pokebola} />
							</Link>
						</li>
					) : (
						<li className="nav-item d-none d-sm-block">
							{store.token ? (
								 <Link to={store.userInfo.rol ? "/perfilprofe" : "/perfilcliente"}>
									<img className="img-icon4" src={Perfil} alt="Icono usuario" />
								</Link>
							) : null}
						</li>
					)}

					{!store.token ? (
						<li className="nav-item d-none d-sm-block">
							<Link to="/login">
								<img className="img-icon2" src={login} alt="Icono usuario" />
							</Link>
						</li>)

						:
						(<li className="nav-item d-none d-sm-block">
							<button onClick={() => actions.logout()}><img className="img-icon3" src={Logout} alt="Icono usuario" /> </button>
						</li>
						)}
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

				<div className="ul-li menu">
					<ul>
						<li>
							<a href="#">Ir al Calendario</a>
						</li>
						<li>
							<a href="#">Login</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
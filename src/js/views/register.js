import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";




export const Register = () => (
	
	<div className="container">
		<div className="row">
			<div className="col-1">
				
		<div> <img src={LOGOPOKEGYM} style={{width:250}} /></div>
	<div className="login-card">
		<h2><img src={registro} style={{width:300}}/></h2>
		<h3>Introduce Información</h3>
		<form className="login-form">
			<input type="text" placeholder="Nombre de Usuario"/>
			<input type="mail" placeholder="Correo"/>
			<input type="password" placeholder="Contraseña"/>
			<input type="password" placeholder="Repetir Contraseña"/>
			<input type="telefono" placeholder="+569"/>
			<input type="Rut" placeholder="Rut"/>
			<button>CREAR</button>
		</form>
		</div>
		</div>
	</div>
	</div>
);

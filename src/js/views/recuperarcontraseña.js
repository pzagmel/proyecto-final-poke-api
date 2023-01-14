import React from "react";
import "../../styles/recuperar.css";

export const RecuperarContraseña = () => (
	
	<div className="container">
		<div className="row">
			<div className="col-1">
				
		<div> <img src={LOGOPOKEGYM} style={{width:250}} /></div>
	<div className="login-card">
		<h2><img src={registro} style={{width:300}}/></h2>
		<h3>Introduce Información</h3>
		<form className="recuperar-form">
			<input type="mail" placeholder="Correo"/>
			<input type="Rut" placeholder="Rut"/>
			<button>OK</button>			
		</form>
		</div>
		</div>
	</div>
	</div>
);
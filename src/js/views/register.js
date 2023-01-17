import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from "react";



export const Register = () => {
	const [pass,setPass] = useState('');
	const [email,setEmail] = useState('');
	
	
	return(	
  
  
   <>
   
	<div className="container">
			<form onSubmit={(evento)=>{
				evento.preventDefault();

			}}/>
		<div className="row">
			<div className="col-1">
				
	<div className="login-card" id="CONTAINERREGISTER">
		<h2><img src={registro} style={{width:300}}/></h2>
		<h3>Introduce Información</h3>
		<form className="login-form">
			<input type="text" placeholder="Nombre de Usuario"/>
			<input type="email" placeholder="Correo"/>
			<input type="password" placeholder="Contraseña"/>
			<input type="password" placeholder="Repetir Contraseña"/>
			<input type="telefono" placeholder="+569"/>
			<input type="Rut" placeholder="Rut"/>
			<button type="submit">CREAR</button>
		</form>
		</div>
		</div>
	</div>
	</div>
  
	
</>
)
};

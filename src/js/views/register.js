import React from "react";
import "../../styles/register.css";
import { useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const Register = () => {
	
	let navigate = useNavigate();
	const{actions, store} = useContext(Context)

	return(	
  
  
   <div>
   
	<div className="container" id="REGISTERHIJOMAYOR" style={{ margin: 30, marginrigth:20 }}>
			
		<div className="row" >
			<div className="col-1">
				
	<div className="login-card" id="CONTAINERREGISTER">
		<h1 className="registro">registro</h1>
		<h3 className="introinfo">Introduce Información</h3>
		<form className="login-form" onSubmit={(evento)=>{
				evento.preventDefault();
				let u = 		(evento.target[0].value)
				let m = 		(evento.target[1].value)
				let p = 		(evento.target[2].value)
				let rp= 	(evento.target[3].value)
				let f = 		(evento.target[4].value)
				let r = 		(evento.target[5].value) 
				
					if(p!=rp){
						alert("Contraseñas deben ser iguales")
					}
					if(u=='' || m=='' || p=='' || rp==''){
						alert("Debes completar los datos")
					}
					if(actions.register(u,m,p,f,r)){
						alert("Registrado")
						navigate('/login')
					}
					else{
						alert("Error en el registro")
					}
					
			}}>
			<input type="text" placeholder="Nombre de Usuario"/>
			<input type="email" placeholder="Correo"/>
			<input type="password" placeholder="Contraseña"/>
			<input type="password" placeholder="Repetir Contraseña"/>
			<input type="Telefono" placeholder="+569 12345678" pattern="\x2b[0-9]+" required/>
			<input type="Rut" placeholder="Rut"/>
			<h3>eres profesor?</h3>
			<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault"/>
			
			
			<button type="submit">CREAR</button>
		</form>
		</div>
		</div>
	</div>
	</div>
  
	
</div>
)
};

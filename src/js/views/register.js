import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


export const Register = () => {
	const [pass,setPass] = useState('');
	const [email,setEmail] = useState('');
	const [usuario,setUsuario] = useState('');
	let navigate = useNavigate();


	
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
				let USER = 		(evento.target[0].value)
				let MAIL = 		(evento.target[1].value)
				let PASS = 		(evento.target[2].value)
				let REPPASS = 	(evento.target[3].value)
				let FONO = 		(evento.target[4].value)
				let RUT = 		(evento.target[5].value) /* AUN NO SE VERIFICA */
					if(PASS!=REPPASS){
						alert("Contraseñas deben ser iguales")
					}
					if(USER=='' || MAIL=='' || PASS=='' || REPPASS==''){
						alert("Debes completar los datos")
					}
					else{
						alert("Registrado")
						navigate('/login')
					}
					
			}}>
			<input type="text" placeholder="Nombre de Usuario"/>
			<input type="email" placeholder="Correo"/>
			<input type="password" placeholder="Contraseña"/>
			<input type="password" placeholder="Repetir Contraseña"/>
			<input type="elefono" placeholder="+569 12345678" pattern="\x2b[0-9]+" required></input>
			<input type="Rut" placeholder="Rut"/>
			<button type="submit">CREAR</button>
		</form>
		</div>
		</div>
	</div>
	</div>
  
	
</div>
)
};

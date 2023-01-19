import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
=======
//import { Formik, Form, Field } from 'formik';
>>>>>>> origin/perfilprofe



export const Register = () => {
	const [pass,setPass] = useState('');
	const [email,setEmail] = useState('');
	const [usuario,setUsuario] = useState('');
	let navigate = useNavigate();


	
	return(	
  
  
   <>
   
	<div className="container" id="REGISTERHIJOMAYOR">
			
		<div className="row" >
			<div className="col-1">
				
	<div className="login-card" id="CONTAINERREGISTER">
		<h2><img src={registro} style={{width:300}}/></h2>
		<h3>Introduce Información</h3>
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
  
	
<<<<<<< HEAD
</>
)
};
=======
	{/* <Formik
  initialValues={{ email: '', password: '', confirmPassword: '' }}
  onSubmit={values => {
    console.log(values);
  }}
>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <div className="tu-diseño">
          <label>
            Email:
            <Field type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <Field type="password" name="password" required />
          </label>
          <br />
          <label>
            Confirm Password:
            <Field type="password" name="confirmPassword" required />
          </label>
          <br />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )}
</Formik> */}
	</>
);
>>>>>>> origin/perfilprofe

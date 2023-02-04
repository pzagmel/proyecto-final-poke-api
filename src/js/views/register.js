import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
// import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";

// import { InfoGym } from "../component/CardsINFOGYM";
// import { Footer } from "../component/footer";
// import { Footergp } from "../component/footer2";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

export const Register = () => {
  //   const [pass, setPass] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [usuario, setUsuario] = useState("");
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const register = async (evento) => {

    evento.preventDefault();
    let USER = evento.target[0].value;
    let MAIL = evento.target[1].value;
    let PASS = evento.target[2].value;
    let REPPASS = evento.target[3].value;
    let FONO = evento.target[4].value;
    let RUT = evento.target[5].value; /* AUN NO SE VERIFICA */
    if (PASS != REPPASS) {
      alert("Contraseñas deben ser iguales");
    }
    if (USER == "" || MAIL == "" || PASS == "" || REPPASS == "") {
      alert("Debes completar los datos");
    } else {     
      await actions.getinfoRegister(
        JSON.stringify({
          nombre: USER,
          email: MAIL,
          password: PASS,
          apellido: USER,
          rut: RUT,
          telefono: FONO,
          rol: evento.target[6].checked,
        })
      );
      alert("Registrado");
      navigate("/login")       
    }
  };
  /* useEffect(()=>{
    const {userInfo:{rol}}=store
    console.log('rol', rol)
    if (rol!==null){
    if (rol){
      navigate("/perfilprofe");
    }else{
      navigate("/perfilcliente");
    }
  }

  }, [store.userInfo.rol]); */
  
  return (
    <>      
      {token && token != "" && token != undefined ? (
        "you are registed in with this token " + token
      ) : (
        <div className="container" id="REGISTERHIJOMAYOR">
          <div className="row registerinfo">
            <div className="col-1">
              <div className="login-card" id="CONTAINERREGISTER">
                <h2 className="register">
                  Registrate{" "}
                </h2>{" "}
                <h3> Introduce Información </h3>
                <form className="login-form" onSubmit={register}>
                  <input type="text" placeholder="Nombre de Usuario" />
                  <input type="email" placeholder="Correo" />
                  <input type="password" placeholder="Contraseña" id="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números" />
                  <input type="password" placeholder="Repetir Contraseña" id="confirm_password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números" />
                  <input type="telefono" placeholder="+569 12345678" required />
                  <input type="Rut" placeholder="Rut" />
                  <h3 className="infoprofe"> eres profesor ? </h3>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault" />
                  <button type="submit">CREAR</button>
              </form>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
};

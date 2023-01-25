import React from "react";
import "../../styles/login.css";
import Cookies from 'universal-cookie';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';




class Login extends React.Component {

    state={
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMesg:""
    }
    // esta funcion es el manejo para que no envie con los input vacios
    manejoSubmit=e=>{
        e.preventDefault();
    }

    //atrapamos lo que escribimos  en los input y los guardamos en el state que esta vacio mas arriba 
    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        
    }

    //enviamos los datos a la Apiurl que esta la ruta en el services y ademas los datos del formulario
    manejadorBoton=()=>{
        let url=  "https://3000-lukasoy-backendpokegym-pgpg4zwa6kn.ws-us84.gitpod.io/login";
        axios.post(url,this.state.form)
        .then(response =>{
            if(response.data.status === 200)
            {
                console.log(response);
            
               
            }else
            {

                console.log(response.data);
                this.setState({
                    error : true,
                    errorMesg: response.data.message
                    
                })
            }
        }).catch(error =>{
           
            this.setState({
                error : true,
                errorMesg: "Error: Al conectar al servicio api"
            });
        })
    }
  
    render() {
      return (
        <React.Fragment>
<div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h1 className="titulologin">
              LOGIN
            </h1>
            
            <form onSubmit={this.manejoSubmit} >
            
            <input type="text"  className="fadeIn second" name="email" onChange={this.manejadorChange} placeholder="login"/>
            <input type="password"  className="fadeIn third" name="password" onChange={this.manejadorChange} placeholder="password"/>   
            <input type="submit" className="fadeIn fourth" onClick={this.manejadorBoton} value="Log In"/>
              </form>
              
              <Link to="/recover" className="link link-style">
                  ¿Olvidaste tu contraseña?
                </Link>
              
              <div className="links-div">
                <Link to="/register" className="link link-style">
                  ¿No tienes cuenta? Registrate
                </Link>
              </div>
            
          </div>
          <h5>
           
          </h5>
        </div>
      </div>
    </div>

            {this.state.error === true &&
           
                <div className="alert alert-danger" role="alert">
                        {this.state.errorMesg}
                </div>
            }

      </React.Fragment>
      );
    }
  }

  export { Login };







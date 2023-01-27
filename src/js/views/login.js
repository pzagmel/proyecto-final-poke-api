import React from "react";
import "../../styles/login.css";

import {Link, NavLink, useNavigate} from 'react-router-dom';







export const Login= () => {

   
      return (
       
<div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h1 className="titulologin">
              LOGIN
            </h1>
            
            <form  >
            
            <input type="text"  className="fadeIn second" name="email"  placeholder="login"/>
            <input type="password"  className="fadeIn third" name="password"  placeholder="password"/>   
            <input type="submit" className="fadeIn fourth"  value="Log In"/>
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

          
      );
  }








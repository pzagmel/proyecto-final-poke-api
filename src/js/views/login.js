import React from "react";
import "../../styles/login.css";

import {Link, NavLink, useNavigate} from 'react-router-dom';

export const Login= () => {

   
      return (
       
<div className="container login-page">
      <div className="row">
        <div className="col-1 login-style">
          <div className="login-card">
            <h2>
              <img src={loginImage} style={{ width: 300 }} />
            </h2>
            <form className="login-form"/>
           
             
               <input
                  type="text"
                  placeholder = "email"
                  
                />
                <input
                type="password"
                placeholder= "Contraseña"
                
              />
            
          
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








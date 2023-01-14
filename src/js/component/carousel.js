import React from "react";
import comentario1 from "../../img/comentario1.png";
import comentario2 from "../../img/comentario2.png";
import comentario3 from "../../img/comentario3.png";
import "../../styles/carousel.css";

export const Comments = () => {
          return (
            <div id="carouselExampleControls" className="carousel slide carousel-style" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-text">
                    <div className="img-div">
                        <img className="d-block w-100 img-style" src={comentario1} alt="First slide" />
                    </div>
                    <div className="text-div">   
                      <h5>Cliente 1</h5>
                      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tincidunt ipsum eget quam varius mattis.</p>
                    </div>                  
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-text">
                    <div className="img-div">
                        <img className="d-block w-100 img-style" src={comentario2} alt="Second slide" />
                    </div>
                    <div className="text-div"> 
                      <h5>Cliente 2</h5>
                      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tincidunt ipsum eget quam varius mattis.</p>
                    </div>  
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-text">
                    <div className="img-div">
                        <img className="d-block w-100 img-style" src={comentario3}  alt="Third slide" />
                    </div>
                    <div className="text-div">
                      <h5>Cliente 3</h5>
                      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tincidunt ipsum eget quam varius mattis.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Siguiente</span>
              </a>
            </div>
          );
        }


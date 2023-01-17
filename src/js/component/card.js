import React from "react";

/* componente card para las primer 3 cartas de home */
export const Card = ({ title, description, img2 }) => {
  return (
    <div className="card bg-primary h-100">
      <h5 className="card-title text-center">{title}</h5>
      <div className="card-body">
        {description && <p className="card-text text-center">{description}</p>}
      </div>
      <img id="pokebola" className="text-center" src={img2}  />
    </div>
  );
};
/* componente del reto de la semana en home */
export const Longcard = ({
  img,
  title,
  description,
  description2,
  description3,
}) => {
  return (
    <div className="card text-bg-light">
  <img src={img} className="card-img" />
  <div className="card-img-overlay">
    <h5 id="titlereto" className="card-title">{title}</h5>
    <p id="reto" className="card-text">{description}</p>
    <p id="reto" className="card-text">{description2} </p>
    <p id="reto" className="card-text">{description3} </p>
  </div>
</div>
  );
};

/* componente card para los 3 profesionales solo destructuring de imagen */
export const Procard = ({ img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img"></img>
    </div>
  );
};

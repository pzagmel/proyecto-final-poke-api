import React from "react";

/* componente card para las primer 3 cartas de home */
export const Card = ({ img, description, img2 }) => {
  return (
    <div className="card bg-primary h-100">
      <img src={img} className="card-img" />
      <div className="card-body">
        {description && <p className="card-text text-center">{description}</p>}
      </div>
      <img src={img2} className="card-img" />
    </div>
  );
};

export const Longcard = ({
  img,
  title,
  description,
  description2,
  description3,
}) => {
  return (
    <div className="card - bg-primary mb-3">
      <img
        src={img}
        className="card-img"
        // style={{ width: "70rem", height: "18rem" }}
      />

        <div className="card-body">
          <h5 id="titlereto" className="card-title text-center">
            {title}
          </h5>
          <p id="reto" className="card-text -lg my-4">
            {description}
          </p>
          <p id="reto" className="card-text -lg">
            {description2}
          </p>
          <p id="reto" className="card-text -lg">
            {description3}
          </p>
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

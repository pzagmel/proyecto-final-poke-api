import React from "react";

/* componente card para las primer 3 cartas de home */
export const Card = ({img, description, img2}) => {
    return (
        <div className="card - bg-primary" style={{"width": "18rem"}}>
        <img src={img} className="card-img-top mx-1" />
        <div className="card-body">
          <p className="card-text text-center">{description}</p>
          <img src={img2} className="card-img-bot" style={{"width": "14rem"}}/>
        </div>
      </div>
    );
  };
  
  export const Longcard = ({img,title,description,description2, description3}) => {
    return (
      <div className="card - bg-primary mb-3" style={{"width":"70rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" style={{"width":"70rem", "height":"18rem"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 id="titlereto" className="card-title text-center">{title}</h5>
        <p id="reto" className="card-text -lg my-4">{description}</p>
        <p id="reto" className="card-text -lg">{description2}</p>
        <p id="reto" className="card-text -lg">{description3}</p>
      </div>
    </div>
  </div>
</div>
);
};

/* componente card para los 3 profesionales solo destructuring de imagen */
export const Procard = ({img}) => {
  return (
      <div className="card - bg-primary" style={{"width": "18rem"}}>
      <img src={img} className="card-img-top mx-1" />
      <div className="card-body">
        <p className="card-text text-center">{description}</p>
        <img src={img2} className="card-img-bot" style={{"width": "14rem"}}/>
      </div>
    </div>
  );
};
import React from "react";

export const Card = ({img, description, img2}) => {

    return (
        <div className="card - bg-primary" style={{"width": "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <img src={img2} className="card-img-bot" style={{"width": "14rem"}}/>
        </div>
      </div>
    );
  };
  
  export const Longcard = ({img,title,description}) => {
    return (
      <div className="card mb-3" style={{"max-width":"540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
</div>

      );
    };
import React from "react";

export const Card = ({img, description, img2}) => {

    return (
        <div className="card" style={{"width": "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <img src={img2} className="card-img-bot" style={{"width": "14rem"}}/>
        </div>
      </div>
    );
  };
  

  

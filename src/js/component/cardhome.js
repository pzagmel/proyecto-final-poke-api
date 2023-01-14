import React from "react";
import Gif from "../../img/gif.gif"


export const CartHome = () => {
    return(
        <div >
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Gif} className="d-block w-100" alt="..."/>
    </div>
</div> 
</div>
</div>
    );
};
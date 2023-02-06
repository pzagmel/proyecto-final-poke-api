import React from "react";
import "../../styles/home.css";
import pokebola from "../../img/pngegg 1.png";
import personaltrainer1 from "../../img/personaltrainer1.gif";
import kine from "../../img/kine.gif";
import personaltrainer2 from "../../img/personaltrainer2.gif";
import reto from "../../img/Tu Desafio.png";
import "../../styles/home.css";
import { Card } from "../component/card.js";
import { Longcard } from "../component/card.js";
import { Procard } from "../component/card.js";
import { CartHome } from "../component/cardhome";
import { Calendario } from "../component/calendario";
import { Comments } from "../component/carousel";
import Cardservice from "../component/cardinfogym";
import { Link } from "react-scroll";
import RetoDias from "../component/retoDias";







export const Home = () => {
return(
<>
<CartHome/>

<div className="diseño1"></div>
<div className="container">
<div className="justify-content-center">
<div className="row g-3 mb-2">
<div className="col-sm-4 ">
<Link  to="infogymhref" spy={true} smooth={true} offset={50} duration={500}><Card
title={"Info!"}
href="CardGroup.infogymhref"
description={"Informacion de qué trata la app"}
img2={pokebola}
/></Link>
</div>
<div className="col-sm-4 ">
<Link  to="cardporfe" spy={true} smooth={true} offset={50} duration={500}><Card
title={"Profes"}
description={"Conoce a nuestros profesionales"}
img2={pokebola}
/></Link>
</div>
<div className="col-sm-4 ">
<Link to="calendario" spy={true} smooth={true} offset={50} duration={500}> <Card
title={"Calendario"}
description={"Elige un actividad para potenciarte"}
img2={pokebola} /></Link>
</div>
</div>
<div className="row">
<div className="col">
<RetoDias/>
</div>

</div>


<div className="diseño2"> </div>
<div className="row" id="cardporfe">
<div className="col-sm-4">
<Procard img={personaltrainer1} />
</div>
<div className="col-sm-4">
<Procard img={kine} />
</div>
<div className="col-sm-4">
<Procard img={personaltrainer2} />
</div>
</div>
</div>
</div>
<div className="container">
<Cardservice/>
 </div>
 

    <div> <Calendario/> </div>
	<div className="comentariocliente"> <Comments/>   </div> 
   </>		  
)
};

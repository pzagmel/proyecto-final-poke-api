import React from "react";
import tituloinfo from "../../img/TITULOINFO.png";
import profesTitulo from "../../img/PROFESTITULO.png";
import unete from "../../img/UNETETITULO.png";
import pokebola from "../../img/pngegg 1.png";
import personaltrainer1 from "../../img/personaltrainer1.gif";
import kine from "../../img/kine.gif";
import personaltrainer2 from "../../img/personaltrainer2.gif";
import reto from "../../img/Tu Desafio.png";

import { InfoGym } from "../component/CardsINFOGYM";
import { Footer } from "../component/footer";
import { Footergp } from "../component/footer2";



export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello pokeRigo!</h1>
		
		<InfoGym/>
		
	</div>
);

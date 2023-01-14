import React from "react";
import "../../styles/home.css";
import { CartHome } from "../component/cardhome";
import { Calendario } from "../component/calendario";
import { Comments }  from "../component/carousel";

export const Home = () => (
	<div>
		<CartHome/>
		<Calendario/>
		<Comments/>
	</div>
);

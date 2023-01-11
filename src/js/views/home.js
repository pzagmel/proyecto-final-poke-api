import React from "react";
import "../../styles/home.css";
import { CartHome } from "../component/cardhome";
import { Calendario } from "../component/calendario";

export const Home = () => (
	<div>
		<CartHome/>
		<Calendario/>
	</div>
);

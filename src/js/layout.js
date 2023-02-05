import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Perfilprofe } from "./views/perfilprofe";
import { Register } from "./views/register";
import { Login } from "./views/login";
import { RecoverPass } from "./views/recoverpass";
import { Perfilcliente } from "./views/perfilcliente";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Navbar2 } from "./component/navbar";

import { Footer } from "./component/footer";
import { Footerf } from "./component/footer2";
import { Error404 } from "./views/404";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Navbar2 />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/perfilprofe" element={<Perfilprofe />} />
						<Route path="/perfilcliente" element={<Perfilcliente />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/recover" element={<RecoverPass />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<Error404/>} />
					</Routes>
					
					<Footerf/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

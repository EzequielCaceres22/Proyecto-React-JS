import React from "react";
import CartWindget from "./CartWidget";

const NavBar = () => {
	return (
		<div className="container-fluid">
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<a className="nav-link active text-dark" aria-current="page" href="#">Hombre</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-dark" href="#">Mujeres</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-dark" href="#">Niños</a>
			</li>
			<li clasNames="nav-item">
				<a className="nav-link text-dark">% OFERTAS</a>
			</li>
			<CartWindget/>
		</ul>
		
		</div>
	);
};

export default NavBar;


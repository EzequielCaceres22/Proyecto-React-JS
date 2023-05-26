import React from "react";
import CartWindget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="div-header-bg">
			<div className="container">
				<div className="row">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<b><NavLink className="nav-link" aria-current="page" to={"/category/hombres"}>Hombres</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/mujeres"}>Mujeres</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/niños"}>Niños</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/accesorios"}>Accesorios</NavLink></b>
						</li>
						<CartWindget/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;


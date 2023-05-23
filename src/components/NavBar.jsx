import React from "react";
import CartWindget from "./CartWidget"

const NavBar = () => {
	return (
		<div className="div-header-bg">
			<div className="container">
				<div className="row">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<b><a className="nav-link" aria-current="page" href="#">Hombres</a></b>
						</li>
						<li className="nav-item">
							<b><a className="nav-link" href="#">Mujeres</a></b>
						</li>
						<li className="nav-item">
							<b><a className="nav-link" href="#">Niños</a></b>
						</li>
						<li className="nav-item">
							<b><a className="nav-link" href="#">Accesorios</a></b>
						</li>
						<CartWindget/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;


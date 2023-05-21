import React from "react";
import CartWindget from "./CartWidget"

const NavBar = () => {
	return (
		<div className="container">
			<div className="row">
				<ul class="nav justify-content-center">
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="#">Hombres</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Mujeres</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Niños</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Accesorios</a>
					</li>
					<CartWindget/>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;


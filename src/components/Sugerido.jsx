import React from "react";
import productos from "./json/products.json";

const Slider = () => {
const productosSugeridos = productosRandom(productos, 5);

  return (
    <div className="slider">
      <h2 className="text-center">Productos Sugeridos</h2>
      <div className="productos-container row row-cols-5">
        {productosSugeridos.map((producto) => (
          <div key={producto.idx} className="producto">
            <img className="img-sug" src={producto.imagen} alt={producto.nombre} />
            <h3 className="img-tit">{producto.titulo}</h3>
            <img className="img-brand" src={producto.marca} alt={producto.titulo}/>
            <h4 className="sug-price"><b>{producto.precio}</b></h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const productosRandom = (productos, cantidad) => {
  const productosSugeridos = [];

  while (productosSugeridos.length < cantidad) {
    const randomizer = Math.floor(Math.random() * productos.length);
    const producto = productos[randomizer];

    if (!productosSugeridos.includes(producto)) {
      productosSugeridos.push(producto);
    }
  }

  return productosSugeridos;
};

export default Slider;

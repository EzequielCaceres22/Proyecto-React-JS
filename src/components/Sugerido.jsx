import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productos from "./json/products.json";


const Slider = () => {
  const [productosSugeridos, setProductosSugeridos] = useState([]);

  useEffect(() => {
    const obtenerProductosSugeridos= () => {
      const productosSugeridos = productosRandom(productos, 5);
      setProductosSugeridos(productosSugeridos);
    };

    obtenerProductosSugeridos();
  }, []);

  return (
    <div className="slider">
      <h4 className="text-center">Sugerencias</h4>
      <Link to={"/item/" + productos.idx}>
      <div className="productos-container row row-cols-5 text-dark">
        {productosSugeridos.map((producto) => (
          <div key={producto.nombre} className="producto">
            <img className="img-sug" src={producto.imagen} alt={producto.nombre} />
            <h3 className="img-tit">{producto.titulo}</h3>
            <img className="img-brand" src={producto.marca} alt={producto.titulo}/>
            <p className="sug-price">Precio:{producto.precio}</p>
          </div>
        ))}
      </div>
    </Link>
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

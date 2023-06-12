import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import productos from "./json/products.json";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const Slider = () => {
  const [productosSugeridos, setProductosSugeridos] = useState([]);


  useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db,"items");
      getDocs(itemsCollection).then(resultado =>{
        console.log(resultado)
      })
  },[]);

  useEffect(() => {
    const obtenerProductosRandom = () => {
      const productosAleatorios = productosRandom(productosSugeridos, 5);
      setProductosSugeridos(productosAleatorios);
    };

    obtenerProductosRandom();
  }, []);


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
};


export default Slider;


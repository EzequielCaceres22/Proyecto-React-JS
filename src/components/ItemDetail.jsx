import ItemCount from "./ItemCount";
import Envios from "./Envios";
//import Sugerido from "./Sugerido";
import { CartContext } from "./context/CartContext";
import { useContext, useEffect, useState } from "react";


const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState ({})

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(producto);
    },[producto]);

    return (
        <div className="container">
            <div className="row product-sty">
                <div className="col-md-6 offset-md-1">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{producto.titulo}</h1>
                    <img src={producto.marca} alt={producto.titulo}/>
                    <h5 className="my-2"><b>TALLE</b></h5>
                    <div>
                        <input type="radio" className="btn-check" name="options" id="option1"/>
                        <label className="btn btn-light my-3 mx-1" for="option1">S</label>

                        <input type="radio" className="btn-check" name="options" id="option2"/>
                        <label className="btn btn-light my-3 mx-1" for="option2">M</label>

                        <input type="radio" className="btn-check" name="options" id="option3"/>
                        <label className="btn btn-light my-3 mx-1" for="option3">L</label>

                        <input type="radio" className="btn-check" name="options" id="option4"/>
                        <label className="btn btn-light my-3 mx-1" for="option4">XL</label>
                    </div>
                    <h4 className="price-card my-3"><b>{producto.precio}</b></h4>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
                <hr className="my-5"/>
                <Envios/>
            </div>
        </div>
    )
}

export default ItemDetail;
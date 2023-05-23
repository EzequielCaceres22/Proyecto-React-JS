import { useEffect, useState } from "react";



const ItemCount = ({stock}) =>{

    const [items, setItems] = useState (1);
    const [productoStock, setProductoStock] = useState (stock)

    const AumentarCantidad = () =>{
        if(items < productoStock) {
            setItems(items + 1);
        }
    }

    const DisminuirCantidad = () =>{
        if(items > 1) {
            setItems(items - 1);
        }
    }

    const OnAdd = () =>{
        if (items <= productoStock) {
            setProductoStock(productoStock - items);
            setItems(1)
        }
    }

    useEffect(() =>{
        setProductoStock(stock)
    },[stock]);


    return(
        <div className="container itm-c">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={DisminuirCantidad}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={AumentarCantidad}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-light" onClick={OnAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});
    
    useEffect(() => {
        setItem(producto);
    },[producto]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.titulo}</h1>
                    <img src={item.marca} alt={item.titulo} />
                    <p><b>{item.precio}</b></p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
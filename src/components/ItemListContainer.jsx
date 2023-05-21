import React, { useEffect, useState } from "react";
import productos from "../components/json/products.json"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [items,setItems] = useState([]);

    useEffect(() =>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            },2000);
        })

        promesa.then(datos => {
            setItems(datos);
        })
    },[]);

    return (
        <div className="container my-5">
            <div className="row">
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;
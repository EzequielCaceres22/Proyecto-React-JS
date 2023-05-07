import React from "react";
import seccion from "../images/seccion.jpg"

const ItemListContainer = ({greeting}) => {

    return (
        <div className="container my-9 text-center">
            <div className="row">
                <div className="col" >
                    <div className="alert alert-danger" role="alert">
                        <p>{greeting}</p>
                    </div>
                    <img src={seccion} alt="En Construccion"/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
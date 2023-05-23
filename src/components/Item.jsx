import ItemCount from "./ItemCount";

const Item = ({item}) => {

    return (
        <>
            <div className="card border border-0">
                <img src={item.imagen} className="card-img-top" alt={item.titulo}/>
                <div className="card-body">
                    <h5 className="tit-item">{item.titulo}</h5>
                    <img className="brand" src={item.marca} alt={item.titulo}/><br/>
                    <b>{item.precio}</b>
                    <ItemCount stock={20}/>
                </div>
            </div>
        </>
    )
}

export default Item;
const Item = (item) => {

    return (
        <>
            <div class="card">
                <img src={item.imagen} class="card-img-top" alt={item.titulo}/>
                <div class="card-body">
                    <h3>{item.titulo}</h3>
                    <img src={item.marca} alt=""/><br/>
                    <b>${item.precio}</b>
                </div>
            </div>
        </>
    )
}

export default Item;
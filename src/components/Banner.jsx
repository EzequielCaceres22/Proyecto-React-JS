


const Banner = () => {

  return (
    <div>
      <div>
        <div id="carouselExampleAutoplaying" className="carousel slide text-center" data-bs-ride="carousel" >
          <div className="carousel-inner carr-hei bg-light">
            <div className="carousel-item carr-itm active">
              <b>3 cuotas sin interés</b><br/>
               <a href="#">Ver opciones de pago</a> 
            </div>
            <div className="carousel-item my-3">
              <b>Entregas a todo el país.</b><br/>
              <a href="#">Ver información de envíos y entregas</a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Banner;
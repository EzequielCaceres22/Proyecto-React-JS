import cart from "../images/cart.svg"

const CartWindget = () => {

    return (
        <button type="button" className="btn position-relative btn-carrito">
           <img src={cart} alt={"carrito"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}


export default CartWindget;
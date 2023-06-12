import cart from "../images/cart.svg"

const CartWindget = () => {

    return (
        <button type="button" className="btn position-absolute end-0 mx-4">
            <img src={cart} alt={"carrito"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}


export default CartWindget;
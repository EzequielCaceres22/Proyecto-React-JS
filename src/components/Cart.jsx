import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
            <p>TOTAL PRODUCTO: {cart.length} </p>
        </div>
    )
}

export default Cart;
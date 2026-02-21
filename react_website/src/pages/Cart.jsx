import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom";

export const Cart = () => {
    const {cart, clearCart} = useCartContext();
    
    if(cart.length === 0){
        return(
            <div className="emptydiv">
                <h3>No Cart Items</h3>
            </div>
        )
    }

    return(
        <>
            <div className="container">
                <div className="cart_heading grid grid-five-column">
                    <p>Item</p>
                    <p className="cart_hide">price </p>
                    <p>Quantity</p>
                    <p className="cart_hide">Subtotal</p>
                    <p>Remove</p>

                </div>
                <hr />

                <div className="cart-item">
                    {
                       cart.map((curElem) => {
                        return <CartItem key={curElem.id} {...curElem}/>
                       }) 
                    }
                </div>
                <hr />
                <div className="cart-two-button">
                    <NavLink to="/product">
                        <button className="continue-btn">Continue Shopping</button>
                    </NavLink>
                    <button className="clear-btn" onClick={clearCart}>Clear cart</button>
                </div>
            </div>
        </>
    )
}
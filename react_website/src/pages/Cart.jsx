import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom";
import { FormatPrice } from "../Helpers/FormatPrice";

export const Cart = () => {
    const {cart, clearCart,total_price,shipping_fee} = useCartContext();
    
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

                {/* order total amount */}
                <div className="order-total--amount">
                    <div className="order-total--subdata">
                        <div className="subtotal">
                            <p>Subtotal:</p>
                            <p><FormatPrice price={total_price}/></p>
                        </div>
                        <div className="shipping_fee">
                            <p>Shipping Fee:</p>
                            <p>
                                <FormatPrice price={shipping_fee}/>
                            </p>
                        </div>
                        <hr />
                        <div className="order_total">
                            <p>Order Total:</p>
                            <p>
                                <FormatPrice price={shipping_fee+total_price}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
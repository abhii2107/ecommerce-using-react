import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartContext"

export const Cart = () => {
    const {cart} = useCartContext();
    console.log(cart)

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
            </div>
        </>
    )
}
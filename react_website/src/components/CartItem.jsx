

import { useCartContext } from "../context/CartContext";
import { FormatPrice } from "../Helpers/FormatPrice";
import { CartAmountToggle } from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";

export const CartItem = ({ id, name, image, price, amount }) => {
    const{removeItem} = useCartContext();
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount-1) : setAmount(1);
    }
    const setIncrease = () => {
        // amount < stock ? setAmount(amount+1) : setAmount(stock);
    }

    return (
        <>
            <div className="cart_heading grid grid-five-column">
                <div className="cart-image--name">
                    <div>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>

                </div>

                {/* price */}

                <div className="cart_hide">
                    <p>
                        <FormatPrice price={price} />
                    </p>
                </div>

                {/* quantity */}
                <div>
                    <CartAmountToggle
                        amount={amount}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}
                    />
                </div>

                {/* subtotal */}
                <div className="cart_hide">
                    <p><FormatPrice price={price*amount}/></p>
                </div>

                <div>
                    <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
                </div>

            </div>

        </>
    )
}
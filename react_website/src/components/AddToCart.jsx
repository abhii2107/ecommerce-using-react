import { useState } from "react";
import { CartAmountToggle } from "./CartAmountToggle";
import { NavLink } from "react-router-dom";


export const AddToCart = ({ product }) => {
    const { id, stock } = product;


    const [amount, setAmount] = useState(1);


    const setDecrease = () => {
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount+1) : setAmount(stock);
    }

    return (
        <>
            {/* add to cart */}
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <div className="product_data btn">
                <NavLink to="/cart">
                <button>Add to Cart</button>
            </NavLink>
            </div>

        </>
    )
}
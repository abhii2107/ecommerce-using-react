const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        // tackle the existing product
        let existingProduct = state.cart.find((currItem) => currItem.id === id)

        if (existingProduct) {
            let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === id) {
                    let newAmount = currElem.amount + amount;

                    if (newAmount > currElem.max) {
                        newAmount = currElem.max;
                    }
                    return {
                        ...currElem,
                        amount: newAmount,
                    }
                }
                else {
                    return currElem;
                }

            });
            return {
                ...state,
                cart: updatedProduct,
            }
        }
        else {
            let cartProduct = {
                // for color = id : id+color
                id,
                title: product.title,
                // color ,
                amount,
                image: product.images[0],
                price: product.price,
                max: product.stock,


            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }


    }

    // to set the increment and decrement
    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let incAmount = currElem.amount + 1;
``
                if (incAmount > currElem.max) {
                    incAmount = currElem.max;
                }

                return {
                    ...currElem,
                    amount: incAmount,
                }
            }
            else{
                return currElem;
            }

        })
        return{
            ...state,
            cart:updatedProduct
        }
    }
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let decAmount = currElem.amount - 1;
                if(decAmount < 1){
                    decAmount = 1;
                }
                return {
                    ...currElem,
                    amount: decAmount,
                }
            }
            else {
                return currElem;
            }
        })
        return {
            ...state,
            cart: updatedProduct
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curItem) => curItem.id != action.payload);

        return {
            ...state,
            cart: updatedCart,
        }
    }
    // to empty the cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    return state;
}

export default CartReducer;
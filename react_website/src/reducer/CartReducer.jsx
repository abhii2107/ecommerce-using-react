const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        // tackle the existing product
        let existingProduct = state.cart.find((currItem) => currItem.id === id)

        if (existingProduct) {
            let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === id) {
                    let newAmount = currElem.amount + amount;

                    if(newAmount > currElem.max){
                        newAmount = currElem.max;
                    }
                    return {
                        ...currElem,
                        amount: newAmount,
                    }
                }
                else{
                    return currElem;
                }

            });
            return {
                ...state,
                cart : updatedProduct,
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
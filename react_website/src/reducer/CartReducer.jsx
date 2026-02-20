const CartReducer = (state,action) => {

    if(action.type === "ADD_TO_CART"){
        let {id,amount,product} = action.payload;
        let cartProduct;

        cartProduct = {
            // for color = id : id+color
            id,
            title : product.title,
            // color ,
            amount ,
            image : product.images[0],
            price : product.price,
            max : product.stock,


        }

        return{
            ...state,
            cart:[...state.cart,cartProduct],
        }
    }

    return state;
}

export default CartReducer;
import { createContext, useReducer, useContext } from "react";
import reducer from '../reducer/CartReducer'
const Cart_context = createContext();

    const initialState = {
        cart:[],
        total_item:"",
        total_amount:"",
        shipping_fee : 5000,
    }


 export const CartProvider = ({children}) => {

    
    const[state,dispatch] = useReducer(reducer,initialState)


    const addToCart = (id,amount,product) => {
        dispatch({type: "ADD_TO_CART",payload:{id,amount,product}})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM",payload:id})
    }



    return <Cart_context.Provider value={{...state,addToCart,removeItem}}>{children}</Cart_context.Provider>
}

export const useCartContext = () => {
    return useContext(Cart_context);
}; 
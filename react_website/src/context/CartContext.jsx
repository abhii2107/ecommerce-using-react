import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from '../reducer/CartReducer'
const Cart_context = createContext();


    const getLocalCartData = () => {
        let localCartData = localStorage.getItem("Ecart");
        if (!localCartData) return [];
        try {
            const parsed = JSON.parse(localCartData);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    const initialState = {
        // cart:[],
        cart : getLocalCartData(),
        total_item:"",
        total_amount:"",
        shipping_fee : 5000,
    }


 export const CartProvider = ({children}) => {

    
    const[state,dispatch] = useReducer(reducer,initialState)


    const addToCart = (id,amount,product) => {
        dispatch({type: "ADD_TO_CART",payload:{id,amount,product}})
    }

    // increment and decrement the product
    const setDecrease =(id) => {
        dispatch({type: "SET_DECREMENT",payload:id})
    }
    // increment and decrement the product
    const setIncrease =(id) => {
        dispatch({type: "SET_INCREMENT",payload:id})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM",payload:id})
    }

    // clear the Cart
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"});
    }


    // to add the data in localstorage
    // get vs set

     useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEM"})
        localStorage.setItem("Ecart",JSON.stringify(state.cart))
     },[state.cart])
     // now get the data and add that in the cart


    return <Cart_context.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>{children}</Cart_context.Provider>
}

export const useCartContext = () => {
    return useContext(Cart_context);
}; 
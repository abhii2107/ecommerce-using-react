import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react";

//create context

export const AppContext = createContext();
const Api = "https://fakestoreapi.com/products"
const intialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}


//context provider

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);

            const products = await res.data.products;

            products = products.map((item,i) => {
                return{
                    ...item,
                    featuerd:i<6
                }
            })

            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }

    }

    useEffect(() => {
        getProducts(Api);
    }, [])


    return (<AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hooks
export const useProductContext = () => {
    return useContext(AppContext);
}; 
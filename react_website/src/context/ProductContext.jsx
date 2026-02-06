import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer } from "../reducer/ProductReducer";

//create context

export const AppContext = createContext();
const Api = "https://dummyjson.com/products"
const intialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},

}


//context provider

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, intialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            let products = res.data.products;
            const updated = products.map((item, i) => {
                return {
                    ...item,
                    featured: i < 6,
                };
            });

            dispatch({ type: "SET_API_DATA", payload: updated });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(Api);
    }, [])


    return (<AppContext.Provider value={{ ...state,getProducts,getSingleProduct }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hooks to use the data of Appcontext
export const useProductContext = () => {
    return useContext(AppContext);
}; 
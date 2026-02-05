import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer } from "../reducer/ProductReducer";

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

    const [state, dispatch] = useReducer(ProductReducer, intialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            let products = res.data;
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

    useEffect(() => {
        getProducts(Api);
    }, [])


    return (<AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hooks to use the data of Appcontext
export const useProductContext = () => {
    return useContext(AppContext);
}; 
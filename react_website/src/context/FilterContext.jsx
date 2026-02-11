import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer"
const FilterContext = createContext();


const intialState = {
    filter_products: [], //now i want to add products in this
    all_products: [],
}

export const FilterContextProvider = ({ children }) => {
    const{products} = useProductContext();

    const[state,dispatch] = useReducer(reducer,intialState); 

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    )

}

// custom hooks
export const useFilterContext =() => {
    return useContext(FilterContext);
}
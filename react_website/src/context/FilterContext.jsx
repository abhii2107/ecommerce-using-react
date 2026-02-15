import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer"
const FilterContext = createContext();


const intialState = {
    filter_products: [], //now i want to add products in this
    all_products: [],
    grid_view: true,
    sorting_value: "lowest"
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, intialState);

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    // to set the List view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    const sorting = (event) => {
        let sortValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
    };

    useEffect(() => {
        dispatch({type: "SORTING_PRODUCTS"})
    },[state.sorting_value])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])
    return (
        <FilterContext.Provider value={{ ...state, setGridView, sorting }}>
            {children}
        </FilterContext.Provider>
    )

}

// custom hooks
export const useFilterContext = () => {
    return useContext(FilterContext);
}
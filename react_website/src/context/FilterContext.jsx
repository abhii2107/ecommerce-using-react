import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer"
const FilterContext = createContext();


const intialState = {
    filter_products: [], //now i want to add products in this
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",

    filters: {
        text: "",
        category:"All",
        brand:"all",
        maxPrice:0,
        minPrice:0,
        price:0,

    }
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
    //sorting function
    const sorting = (event) => {
        let sortValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
    };
    // to update filtered products and then sort them when filters or sorting change
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sorting_value, state.filters]);


    // update the filter values (use `name` first, `title` as fallback)
    const updateFilterValue = (event) => {
        let name = event.target.name || event.target.title;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }

    // to clear the filters
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }



    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    )

}

// custom hooks
export const useFilterContext = () => {
    return useContext(FilterContext);
}
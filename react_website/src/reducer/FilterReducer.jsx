import { ListView } from "../components/ListView";

const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],// ... means instead of using original data i am using copy
                all_products: [...action.payload],
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            
            return {
                ...state,
                sorting_value: action.payload,
            };
        
        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProducts = [...action.payload];

            if(state.sorting_value === "a-z"){
                newSortData = tempSortProducts.sort((a,b) => {
                    return a.title.localeCompare(b.title);
                })
            }

            if(state.sorting_value === "z-a"){
                newSortData = tempSortProducts.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                })
            }

            if(state.sorting_value === "lowest"){
                const sortingProducts = (a,b) => {
                    return a.price - b.price; //peice will in ascending order
                }
                newSortData = tempSortProducts.sort(sortingProducts)
            }

            if(state.sorting_value === "highest"){
                const sortingProducts = (a,b) => {
                    return b.price - a.price; //price will in descending order
                }
                newSortData = tempSortProducts.sort(sortingProducts)
            }

            return{
                ...state,
                filter_products: newSortData,
            }
        
        default:
            break;
    }
}

export default FilterReducer;// we are doing this so we can change name to reducer
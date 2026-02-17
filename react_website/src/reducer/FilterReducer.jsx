import { ListView } from "../components/ListView";

const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            // compute price bounds for range filter
            const prices = action.payload.map((p) => p.price);
            const maxPrice = Math.max(...prices);
            const minPrice = Math.min(...prices);
            return {
                ...state,
                filter_products: [...action.payload],// ... means instead of using original data i am using copy
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice,
                    minPrice,
                    price: maxPrice,
                },
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
            // let tempSortProducts = [...action.payload];

            const { filter_products, sorting_value } = state;
            let tempSortProducts = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.title.localeCompare(b.title);
                }
                if (sorting_value === "z-a") {
                    return b.title.localeCompare(a.title);
                }
            }


            newSortData = tempSortProducts.sort(sortingProducts)


            return {
                ...state,
                filter_products: newSortData,
            }
        
        case "UPDATE_FILTERS_VALUE":
            const { name, value: rawValue } = action.payload;
            let value = rawValue;
            if (name === "price") {
                value = Number(rawValue);
            }

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            }
        
        case "FILTER_PRODUCTS":
            let{all_products} = state;
            let tempFilterProduct = [...all_products];
            const {text, brand, category, price} = state.filters;

            if(text){
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.title.toLowerCase().includes(text);
                })
            }

            if(brand && brand !== "all"){
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.brand  === brand;
                })
            }

            if(category && category !== "All"){
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.category === category;
                })
            }

            if(price){
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                     return   currElem.price <= price;

                })
            }
            
            return{
                ...state,
                filter_products: tempFilterProduct,
            }
        default:
            break;
    }
}

export default FilterReducer;// we are doing this so we can change name to reducer
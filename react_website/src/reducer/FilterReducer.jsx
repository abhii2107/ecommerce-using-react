 const FilterReducer = (state,action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products:[...action.payload],// ... means instead of using original data i am using copy
                all_products: [...action.payload],
            }
        case "SET_GRIDVIEW":
             return{
                ...state,
                grid_view: true,
             }   
    
        default:
            break;
    }
}

export default FilterReducer;// we are doing this so we can change name to reducer
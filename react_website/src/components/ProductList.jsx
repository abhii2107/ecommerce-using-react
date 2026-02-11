import { useFilterContext } from "../context/FilterContext";
import { GridView } from "./Gridview";
import { ListView } from "./ListView";

export const ProductList = ()=> {

    const {filter_products,grid_view} = useFilterContext();
    if(grid_view === true){
        return<GridView products = {filter_products}/>

    }
    if(grid_view === false){
        return <ListView products = {filter_products}/>
    }



    return <h1>Productlist</h1>
}
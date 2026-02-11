import { useFilterContext } from "../context/FilterContext";
import { GridView } from "./Gridview";
import { ListView } from "./ListView";

export const ProductList = ()=> {

    const {filter_products,setGridView} = useFilterContext();
    if(setGridView){
        return<GridView products = {filter_products}/>

    }
    if(setGridView === false){
        return <ListView products = {filter_products}/>
    }



    return <h1>Productlist</h1>
}
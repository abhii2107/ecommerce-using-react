import { useProductContext } from "../context/ProductContext"
import { Products } from "../components/Products"
import { FilterSection } from "../components/FilterSection";
import { Sort } from "../components/Sort";
import { ProductList } from "../components/ProductList";
import { useFilterContext } from "../context/FilterContext";

export const Product = () => {
 
 

    return (
        <div className="productpage ">
            <div className="container grid grid-filter-column">
                <div>
                    <FilterSection/>
                </div>
                <section className="product-view--sort">
                    <div className="sort-filter">
                        <Sort/>
                    </div>

                    <div className="main-product">
                        <ProductList/>
                    </div>
                </section>
            
            </div>
        </div>
    )
}


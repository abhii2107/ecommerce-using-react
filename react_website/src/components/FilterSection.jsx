import { useFilterContext } from "../context/FilterContext"
import { FormatPrice } from "../Helpers/FormatPrice";

export const FilterSection = () => {
    const { filters: { text, category, brand, price, maxPrice, minPrice },
        updateFilterValue,
        all_products,
        clearFilters,
    } = useFilterContext();

    // to get the unique data of each fields
    const getUniqueData = (data, property) => {
        let newVal = data.map((currElem) => {
            return currElem[property];

        })
        return (newVal = ["All", ...new Set(newVal)]);//only unique value willm comes

    }
    // we need unique data of each in array format
    const categoryOnlyData = getUniqueData(all_products, "category");
    const companyData = getUniqueData(all_products,"brand")
    console.log(companyData);
    return (
        <>
            <div className="filter-search">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="text" title="text" placeholder="Search products..." value={text} onChange={updateFilterValue} />
                </form>
            </div>

            <div className="filter-category">
                <h3>Category</h3>
                <div>
                    {
                        categoryOnlyData.map((currElem,index) => {
                            return <button 
                                key={index} 
                                type="button" 
                                name="category" 
                                title="category"
                                onClick={updateFilterValue} 
                                value={currElem}
                                className={category === currElem ? "active" : ""}
                            >
                                {currElem}
                            </button>
                        })
                    }
                </div>
            </div>
            
            <div className="filter-company">
                <h3>Company</h3>
                <form action="#">
                    <select name="brand" id="brand" className="filter-company--select" title="brand" value={brand} onChange={updateFilterValue}>
                        {
                            companyData.map((currElem,index) => {
                                return (
                                    <option key={index} value={currElem}>
                                        {currElem}
                                    </option>
                                )
                            })
                        }
                    </select>
                </form>
            </div>

            <div className="filter_price">
                <h3>Price</h3>
                <p>
                    <FormatPrice price={price}/>
                </p>

                <input type="range" name="price" title="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
            </div>

            <div className="filter-clear">
                <button type="button" className="btn" onClick={clearFilters}>
                    Clear Filters
                </button>
            </div>
        </>
    )
}
import { BsGridFill , BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";


export const Sort = () => {
    const { grid_view , setGridView,setListView, filter_products } = useFilterContext();
    return (
        <div className="sort-section">
            {/* first column */}
            <div className="sorting-list--grid">
                <button className={grid_view ? " active sort-btn" : "sort-btn"}
                    onClick={setGridView}  >
                    <BsGridFill  className="icon" />
                </button>
                <button className={!grid_view ? " active sort-btn" : "sort-btn"}
                    onClick={setListView}    >
                    <BsList className="icon" />
                </button>
            </div>

            {/* 2nd column */}
            <div className="product-data">
                <p>{`${filter_products.length} Product Available`}</p>
            </div>

            
            <div className="sort-selection">dropdown</div>
        </div>
    )
}
import { useFilterContext } from "../context/FilterContext"

export const FilterSection = () => {
    const { filters: { text },
        updateFilterValue
    } = useFilterContext();
    return (
        <div className="filter-search">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="text" title="text" placeholder="Search products..." value={text} onChange={updateFilterValue} />
            </form>
        </div>
    )
}
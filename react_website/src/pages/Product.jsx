import { useProductContext } from "../context/ProductContext"
import { Products } from "../components/Products"

export const Product = () => {
    const { isLoading, products } = useProductContext();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="section">
            <div className="container">
                <div className="intro-data">Explore</div>
                <div className="common-heading">All Products</div>
                <div className="grid grid-three-column">
                    {products && products.length > 0 ? (
                        products.map((item) => (
                            <Products key={item.id} {...item} />
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
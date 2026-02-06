import { useProductContext } from "../context/ProductContext"
import { Products } from "./Products";



export const FeaturedProd = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts);
    
    if(isLoading){
        return <div>.......Loading</div>
    }
    return(
        <>
            <div className="section">
                <div className="container">
                    <div className="intro-data">
                        Check Now !
                    </div>
                    <div className="common-heading">
                        Our Feature Services
                    </div>
                    <div className="grid grid-three-column">
                        {
                            featureProducts && featureProducts.length > 0 ? (
                                featureProducts.map((currElem) => (
                                    <Products key={currElem.id} {...currElem} />
                                ))
                            ) : (
                                <p>No featured products found.</p>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
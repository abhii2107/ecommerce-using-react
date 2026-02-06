import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductContext } from "../context/ProductContext";
import { PageNavigation } from "../components/PageNavigation";
import { MYImage } from "../components/MyImage";
import { FormatPrice } from "../Helpers/FormatPrice";
import { FaTruck } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";



const API = "https://dummyjson.com/products"

export const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
    console.log(singleProduct)
    const { id } = useParams();
    //  console.log(id) 

    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        brand,
        category,
        stock,
        availabilityStatus,
        images,
        returnPolicy,
        shippingInformation,
        warrantyInformation,
    } = singleProduct;

    useEffect(() => {
        if (id) {
            getSingleProduct(`${API}/${id}`);
        }
    }, [id]);

    if (isSingleLoading) {

    }


    return (
        <>
            <PageNavigation title={title} />
            <div classname="container">
                <div className="grid grid-two-column">
                    {/* product imag3es */}
                    <div className="product_images">
                        <MYImage images={images} />
                    </div>

                    {/* product data */}
                    <div className="product_data">
                        <h2>{title}</h2>
                        <p className="product-description">{description}</p>

                        <p className="product-price">
                            <strong>MRP:</strong>
                            <del>
                               <b><FormatPrice price={price + 250} /></b> 
                            </del>
                            <p className="product-price product-real-price">
                                <strong>Deal of the Day:</strong> <FormatPrice price={price} />
                            </p>
                            {discountPercentage ? (
                                <span className="discount"> ({discountPercentage}% off)</span>
                            ) : null}
                        </p>

                        <p><strong>Brand:</strong> {brand}</p>
                        <p><strong>Category:</strong> {category}</p>

                        <p><strong>Rating:</strong> {rating} / 5</p>

                        <p><strong>Availability:</strong> {stock > 0 ? `${stock} in stock` : 'Out of stock'}</p>

                        <div className="product-data-warranty">
                            <div className="product-warranty-data">
                                {returnPolicy && <p><MdOutlineAssignmentReturn className="warranty-icon" /><strong>Return:</strong> {returnPolicy}</p>}
                            </div>
                        </div>
                        <div className="product-data-warranty">
                            <div className="product-warranty-data">
                                {shippingInformation && <p><FaTruck className="warranty-icon" /><strong>Shipping:</strong> {shippingInformation}</p>}
                            </div>
                        </div>
                        <div className="product-data-warranty">
                            <div className="product-warranty-data">
                               {warrantyInformation && <p><RiShieldCheckLine className="warranty-icon" /><strong>Warranty:</strong> {warrantyInformation}</p>}
                            </div>
                        </div>
                        <button className="btn">Add to Cart</button>
                    </div>

                </div>

            </div>
                            
        </>
    )
}
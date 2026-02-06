import { useEffect, useState } from "react";

export const MYImage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (images && images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);
    return (
        <>
            <div className="product-image-container">
                {/* Main Image Display */}
                <div className="main-image">
                    <figure>
                        <img src={selectedImage} alt="Product main" />
                    </figure>
                </div>

                {/* Thumbnail Images */}
                <div className="product-thumbnail">
                    {images && images.length > 0 ? (
                        images.map((currElem, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`thumbnail-item ${selectedImage === currElem ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(currElem)}
                                >
                                    <img src={currElem} alt={`Product thumbnail ${index + 1}`} />
                                </div>
                            )
                        })
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
        </>
    )
}
import { FaTruck, FaShieldAlt, FaUndoAlt, FaLock } from "react-icons/fa";


export const Services = () => {
    return (
        <>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="services-1">
                        <div >
                            <FaTruck className="icon" />
                            <h3>Super Fast and Free Delivery</h3>
                        </div>
                    </div>
                    <div className="services-2">
                        <div className="services-column-2" >
                            <div>
                                <FaShieldAlt className="icon" />
                                <h3>Non-contact Shipping</h3>
                            </div>
                        </div>
                        <div className="services-column-2" >
                            <div>
                                <FaUndoAlt className="icon" />
                                <h3>Money-back Guaranteed</h3>
                            </div>
                        </div>
                    </div>
                    <div className="services-3">
                        <div>
                            <FaLock className="icon"/>
                            <h3>Super Secure Payment System</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
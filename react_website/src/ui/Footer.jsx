import { NavLink } from "react-router-dom"
import { FaDiscord } from "react-icons/fa";
import { FaYoutube, FaInstagram } from "react-icons/fa";



export const Footer =() => {
    return(
        <>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <div>
                        <button>
                            <NavLink to="/contact">
                                Get Started
                            </NavLink>
                        </button>
                    </div>
                </div>
            </section>

            {/* main footer */}
            <footer>
                <div className="container">
                    <div className="grid-four-column">
                        <div className="footer-about">
                            <h3>XYZ Store</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque.</p>
                        </div>
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="">
                                <input type="email" placeholder="your e-mail" />
                                <input type="submit" value="subscribe"/>
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3>Follow us</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <FaDiscord className = "icons"/>
                                </div>

                                <div>
                                    <FaInstagram className="icons"/>
                                </div>

                                <div>
                                    <FaYoutube/>
                                </div>
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <a href="tel:9588797435">+91 9588797435</a>
                        </div>
                    </div>
                    {/* bottom footer */}
                    <div className="footer-bottom--section">
                        <hr />
                        <div className="grid-two-column">
                            <p>@{new Date().getFullYear()} CopyRight. All Rights Reserved</p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        
        </>
    )
}
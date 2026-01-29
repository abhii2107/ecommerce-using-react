import { NavLink } from "react-router-dom"

export const HeroSection = ({myData}) => {
    const {name} = myData;
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        <span className="welcome-text">Welcome to</span>
                        <span className="brand-text">{name}</span>
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort, Search, and filter through the countries to find the detail s you need.
                    </p>
                    <NavLink>
                        <button className="btn btn-darken btn-inline bg-white-box">
                            SHOP NOW
                        </button>
                    </NavLink>
                </div>
                <div className="hero-image">
                    <img src="./images/hero.jpg" alt="e commerce herosection image" className="banner-image" />
                </div>
            </div>
        </main>
    )
}
import { NavLink } from "react-router-dom"
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";


export const Header = () => {

    
    const[showMenu,setShowMenu] = useState(false)
    const handleButtontoggle = () => {
        setShowMenu(!showMenu);
    }



    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <NavLink to = "/"><h1></h1></NavLink>
                    </div>
                    
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Services</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>

                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtontoggle}><FaHamburger/></button>
                    </div>
                </div>
            </div>
        </header>
    )
}
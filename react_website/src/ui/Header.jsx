import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtontoggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">

          {/* LOGO */}
          <div className="logo">
            <NavLink to="/">
              <h1>XYZ STORE</h1>
            </NavLink>
          </div>

          {/* NAV LINKS */}
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/product">Products</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* RIGHT SIDE ICONS */}
          <div className="nav-icons">

            {/* CART ICON */}
            <NavLink to="/cart" className="cart-icon">
              <FiShoppingBag />
              <span className="cart-count">10</span>
            </NavLink>

            {/* HAMBURGER MENU */}
            <div className="ham-menu">
              <button onClick={handleButtontoggle}>
                {showMenu ? <IoClose /> : <GiHamburgerMenu />}
              </button>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

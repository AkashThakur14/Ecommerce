import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuToogleButton = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>

      <header>
        <div className="logo">
          <NavLink to="/">
            <img src="./Images/logo.png" alt="image logo " />
          </NavLink>
        </div>

        <div className="navbar">
          <nav  className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul className='navbar-list'>
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li><NavLink to="/login" className="login-btn nav-link">Login</NavLink></li>
              <li><NavLink to="/cart" className="nav-link"><FiShoppingCart className='cart-trolley' /><span className='cart-total'>3</span></NavLink></li>
            </ul>
          </nav>
          
          <div className="menu-hamburg">
            <button onClick={menuToogleButton}>
            <CgMenu  />
            </button>

          </div>

        </div>
      </header>

    </>
  )
}


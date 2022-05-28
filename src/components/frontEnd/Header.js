import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
        <div>
            <h1>
                <Link to="/" className='logo'>
                    Gadgets Store
                </Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li>
                  <Link to="/" >Home</Link>  
                </li>
                <li>
                  <Link to="/cart" className='cart' ><i class="fas fa-shopping-cart" /></Link>  
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;
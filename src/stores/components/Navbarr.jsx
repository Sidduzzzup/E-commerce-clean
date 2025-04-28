import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Products from './Products';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaCartPlus } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { BiSolidUserAccount } from "react-icons/bi";

function Navbarr() {
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="navbar-brand">
            <img src="/assets/sizonbazar_logo_1.png" alt="Sizon" className="navbar-logo" />
          </Link>

          {/* Main Navigation */}
          <div className="nav-links"> 
            {/* Categories Dropdown */}
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsArticlesOpen(true)}
              onMouseLeave={() => setIsArticlesOpen(false)}
            >
              <button className="nav-link dropdown-toggle">
                Categories
              </button>
              <div className={`dropdown-menu ${isArticlesOpen ? 'show' : ''}`}>
                <Link to="/Tvs" className="dropdown-item">TVs</Link>
                <Link to="/coms" className="dropdown-item">Computers</Link>
                <Link to="/acs" className="dropdown-item">Air Conditioners</Link>
                <Link to="/mob" className="dropdown-item">Mobiles</Link>
                <Link to="/fridge" className="dropdown-item">Refrigerators</Link>
                <Link to="/watch" className="dropdown-item">Watches</Link>
                <Link to="/men" className="dropdown-item">Men's Fashion</Link>
                <Link to="/women" className="dropdown-item">Women's Fashion</Link>
                <Link to="/kitchen" className="dropdown-item">Kitchen Appliances</Link>
                <Link to="/speaker" className="dropdown-item">Speakers</Link>
                <Link to="/fur" className="dropdown-item">Furniture</Link>
              </div>
            </div>

            {/* Main Navigation Links */}
            <Link to="/games" className="nav-link">Games</Link>
            <Link to="/Tvs" className="nav-link">TVs</Link>
            <Link to="/top-sales" className="nav-link">Top Sales</Link>
            <Link to="/russ" className="nav-link">Russian</Link>
            <Link to="/japanese" className="nav-link">Japanese</Link>
          </div>

          {/* Auth Buttons and Cart */}
          <div className="auth-buttons">
            {user ? (
              <div className="user-section">
                <div className="user-dropdown">
                  <div className="user-profile">
                    {/* <img 
                      src={user.photoURL || '/assets/default-profile.png'} 
                      alt="Profile" 
                      className="profile-image"
                    /> */}
                    <BiSolidUserAccount style={{height: '35px', width: '35px', marginRight: '20px'}} />
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                      <FaUser className="icon" /> Profile
                    </Link>
                    <Link to="/cart" className="dropdown-item">
                      <FaCartPlus className="icon" /> Cart
                    </Link>
                  </div>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt className="icon" />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="sign-in-btn">Sign In</Link>
                <Link to="/signup" className="get-started-btn">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navbarr;

